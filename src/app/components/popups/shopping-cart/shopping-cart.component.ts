import { Component, OnInit } from '@angular/core';
import {CartService} from '../../../services/cart.service';
import {Book} from '../../../models/book';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  cartItems: Book[];
  totalAmount: number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {

    this.cartService.getBooks().subscribe(data => {
      this.cartItems = data;
      this.totalAmount = this.cartService.getTotalPrice();
    });
  }

  removeBook(isbn) {
    this.cartService.removeBookFromCart(isbn);
  }

  emptyCart() {
    this.cartService.emptyCart();
  }

  checkout() {
    this.cartService.checkout();
  }
}
