import { Component, OnInit } from '@angular/core';
import { Observable,tap } from 'rxjs';
import { OrderdetailService } from '../shared/orderdetail.service';
@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.css']
})
export class OrderdetailComponent implements OnInit {

  constructor(public ODservice:OrderdetailService) { }
  listOrder:Observable<any> = this.ODservice.getOrderDetailByID(JSON.parse(localStorage.getItem('OrderID')||"")).pipe(tap((data) =>{console.log(data)}));
  ngOnInit(): void {
    
  }

}
