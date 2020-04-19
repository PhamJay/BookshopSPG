import { Component, OnInit } from '@angular/core';
import {OrderDataSource} from '../../../datasources/order-data-source.service';
import {OrderService} from '../../../services/order.service';
import {Order} from '../../../models/order';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.scss']
})
export class AllOrdersComponent implements OnInit {

  displayedColumns: string[] = ['ordernr', 'username', 'ordertime', 'delivery'];
  orderDataSource = new OrderDataSource(this.orderService);

  constructor(private orderService: OrderService) {
  }

  ngOnInit(): void {
  }

  deleteOrder(order: Order, input: string) {
    if (input == null) { return; }
    this.orderDataSource.delete(order);
  }


}
