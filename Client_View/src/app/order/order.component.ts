import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shared/order.service';
import { Observable,tap } from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(public service: OrderService) { }
  
  list:Observable<any> = this.service.getOrderByCustomer(JSON.parse(localStorage.getItem('customerId')||"")).pipe(tap((data) =>{}));  
  
  ngOnInit(): void {
  }
  detail(id:number){
    localStorage.removeItem('OrderID')
    localStorage.setItem('OrderID', JSON.stringify(id));
    location.href="/order/details";
  }

}
