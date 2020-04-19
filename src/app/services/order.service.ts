import {Injectable, Optional} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DatasourceOptions} from '../models/datasource-options';
import {Observable} from 'rxjs';
import {Order} from '../models/order';
import {Author} from '../models/author';
import {Book} from '../models/book';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private serviceUrl = 'http://localhost:8080/api/orders';

  constructor(private http: HttpClient, @Optional() public options: DatasourceOptions) { }

  getOrders(): Observable<Order[]> {
    return this.getAllOrders();
  }

  private getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.serviceUrl);
  }
  public deleteOrder(id: string): Observable<Order[]> {
    const del = this.http.delete<Order[]>(this.serviceUrl + '?ordernr=' + id);
    del.subscribe();
    return del;
  }

  public async addOrder(books: Book[], username: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    const ordertime = new Date();
    const delivery = new Date();
    delivery.setDate(ordertime.getDate() + 7);

    const postOrder = new Order();
    postOrder.ordertime = ordertime;
    postOrder.delivery = delivery;
    postOrder.username = username;

    let _ordernr: number;

    const post = await this.http.post<any>(
      this.serviceUrl,
      JSON.stringify(postOrder),
      httpOptions).pipe(map(data => {
      _ordernr = data[0].ordernr;
    })).subscribe(res => {
      for (const book of books) {
        const bookPost = this.http.post(
          this.serviceUrl + '?ordernr=' + _ordernr + '&isbn=' + book.isbn,
          null
        ).subscribe();
      }
    });
  }

}
