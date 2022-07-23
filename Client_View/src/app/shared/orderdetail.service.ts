import { Injectable } from '@angular/core';
import { Orderdetail } from './orderdetail.model';
import {HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OrderdetailService {

  constructor(private http: HttpClient) { }
  readonly baseURL  = 'https://localhost:44373/api/OrderDetail';
  formData: Orderdetail = new Orderdetail();
  list: Orderdetail[];
  postOrderDT(id:number,data:any){
    return this.http.post(`https://localhost:44373/api/OrderDetail/add/${id}`, data);
  }
  putOrderDT(id:number) {
    return this.http.put(`${this.baseURL + '/update'}/${id}`, this.formData);
  }
  getOrderDetailByID(id:number){
    return this.http.get(`${this.baseURL}/${id}`);
  }
}
