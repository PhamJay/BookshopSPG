import {Injectable, Optional} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DatasourceOptions} from '../models/datasource-options';
import {Observable} from 'rxjs';
import {Order} from '../models/order';
import {Author} from '../models/author';

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
    return this.http.delete<Order[]>(this.serviceUrl + '?ordernr=' + id).subscribe();
  }
  private getOrderByAutnr(autnr: string): Observable<Order[]> {
    return this.http.get<Order[]>(this.serviceUrl + '?autnr=' + autnr);
  }
}
