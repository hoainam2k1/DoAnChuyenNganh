import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { OrderService } from '../shared/order.service';
@Component({
  selector: 'app-allorder',
  templateUrl: './allorder.component.html',
  styleUrls: ['./allorder.component.css']
})
export class AllorderComponent implements OnInit {

  constructor(public service:OrderService) { }
  list:Observable<any> = this.service.refreshList().pipe(tap((data) =>{}));
  ngOnInit(): void {
  }
  detail(id:number){
    localStorage.removeItem('OrderID')
    localStorage.setItem('OrderID', JSON.stringify(id));
    location.href="/order/details";
  }
}
