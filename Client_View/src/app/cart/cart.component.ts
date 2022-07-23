import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { OrderService } from '../shared/order.service';
import { OrderdetailService } from '../shared/orderdetail.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  OrderDetail :{ 
    orderId: number,
    productId: number,
    productName: string,
    unitPrice: number,
    quantity: number
   } [] = [];
   NewOrderDetail :{ 
    orderId: number,
    productId: number,
    productName: string,
    unitPrice: number,
    quantity: number
   } [] = [];
   OrderDi:{
    orderId: number,
    productId: number,
    unitPrice: number,
    quantity: number
   } [] = [];
  constructor(public service: OrderService, public DTservice:OrderdetailService) { }

  ngOnInit(): void {
    const list = localStorage.getItem('OrderDetail')
    if(list)
    {
      this.OrderDetail = JSON.parse(list)
    }
    const cusID = localStorage.getItem('customerId')
    if(cusID)
    {
      this.service.formData.customerId = JSON.parse(cusID)
    }
    
  }
  orderID : number
  onDelete(id:number){
    if(confirm('Are you sure to delete this record?'))
    {
      this.OrderDetail = JSON.parse(localStorage.getItem('OrderDetail')||"")
      const valueToRemove = this.OrderDetail.find((data) => data.productId === id);
      this.NewOrderDetail = this.OrderDetail.filter(item => item !== valueToRemove);
      localStorage.removeItem('OrderDetail')
      localStorage.setItem('OrderDetail', JSON.stringify(this.NewOrderDetail));
      location.reload()
    }
  }
  onSubmit(form: NgForm)
  {
    if(form.value.shipAddress != null && this.service.formData.customerId != null)
    {
      const success =  this.service.postOrder().subscribe(
        (res:any) => { 
        localStorage.setItem('OrderId', JSON.stringify(res.orderId));
        if(localStorage.getItem('OrderId'))
          {
            this.OrderDetail = JSON.parse(localStorage.getItem('OrderDetail')||"")
            const x = this.OrderDetail.map((item)=>{
              const modifiedItem = {
                orderId:0, productId: item.productId,
                unitPrice: item.unitPrice,
                quantity: item.quantity,
                discount:0} 
              return modifiedItem;
              })
            this.orderID = JSON.parse(localStorage.getItem('OrderId')||"")
            this.DTservice.postOrderDT(this.orderID,x).subscribe(
              
            )
            console.log(this.orderID,x)
          }
       
          localStorage.removeItem('OrderDetail')
        
        alert("Order Successfully")
        // location.href="/home";
        },
        err => { console.log(err); }
      );
      if(success)
      {    
        
          
        
      }
  
    }
    else
    {
      alert("ShipAddress Empty")
    }
    
  }
  insertOrder()
  {

  }
  
}
