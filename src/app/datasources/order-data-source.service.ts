import { Injectable } from '@angular/core';
import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {OrderService} from '../services/order.service';
import {Observable} from 'rxjs';
import {Order} from '../models/order';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrderDataSource extends DataSource<any> {

  private router: Router;

  constructor(private orderService: OrderService) {
    super();
  }

  connect(): Observable<Order[]> {
    return this.orderService.getOrders();
  }

  delete(order: Order) {
    this.orderService.deleteOrder(order.ordernr.toString());
  }

  disconnect(collectionViewer: CollectionViewer): void {
  }
}
