import { Product } from './../shared/product.model';
import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public service:ProductService) { }
  listProduct:any;
  list:Observable<any> = this.service.refreshList().pipe(tap((data) =>{this.listProduct = data}));
  
  OrderDetail :{
    orderId:number, 
    productId: number,
    productName: string,
    unitPrice: number,
    quantity: number
   } [] = [];
  ngOnInit(): void {
    
  }
  addToCart(id:number)
  {
    
    const lProduct = this.listProduct.find((item:any) => item.productId === id)
    const storage = localStorage.getItem('OrderDetail')
    if(storage)
    {
      this.OrderDetail = JSON.parse(storage)
    }
    const exits = this.OrderDetail.find((item) =>
    {
      return item.productId === id;
    })
    if(exits)
    {
      exits.quantity++;
    }
    else
    {      
      this.OrderDetail.push({
        orderId: 0,
        productId : Number(lProduct.productId),
        productName: String(lProduct.productName),
        unitPrice : Number(lProduct.unitPrice),
        quantity : 1,
      })
      alert("Add Successfully")
    }
    localStorage.setItem('OrderDetail', JSON.stringify(this.OrderDetail))
  }
}
