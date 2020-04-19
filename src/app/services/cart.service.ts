import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Book} from '../models/book';
import {OrderService} from './order.service';
import {OktaAuthService} from '@okta/okta-angular';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItems = [];
  public books = new Subject();

  constructor(private orderService: OrderService, private oktaAuthService: OktaAuthService) {
  }

  getBooks(): Observable<any> {
    console.log('this.cartItems :', this.cartItems);
    return this.books.asObservable();
  }

  async checkout() {
    const claims = await this.oktaAuthService.getUser();
    const username = claims.email;
    await this.orderService.addOrder(this.cartItems, username);
  }

  // Add single book to the cart
  addBookToCart(book) {
    this.cartItems.push(book);
    this.books.next(this.cartItems);
  }

  // Remove single book from the cart
  removeBookFromCart(isbn) {
    this.cartItems.map((book, index) => {
      if (book.isbn === isbn) {
        this.cartItems.splice(index, 1);
      }
    });

    // Update Observable value
    this.books.next(this.cartItems);
  }

  // Remove all the items added to the cart
  emptyCart() {
    this.cartItems.length = 0;
    this.books.next(this.cartItems);
  }

  // Calculate total price on item added to the cart
  getTotalPrice() {
    let total = 0;

    this.cartItems.map(book => {
      total += book.price;
    });

    return total;
  }
}
