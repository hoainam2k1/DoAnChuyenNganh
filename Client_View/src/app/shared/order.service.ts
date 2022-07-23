import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Order } from './order.model';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  readonly baseURL  = 'https://localhost:44373/api/Order';
  formData: Order = new Order();
  list: Order[];
  postOrder() {
    return this.http.post(this.baseURL + '/add', this.formData);
  }
  getOrderByCustomer(id:string){
    return this.http.get(`https://localhost:44373/api/Order?id=${id}`)
  }
  refreshList() {
    return this.http.get(this.baseURL + '/getall')
  }
}
