import { Injectable } from '@angular/core';
import { Customer } from './customer.model';
import {HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }
  readonly baseURL  = 'https://localhost:44373/api/Customer';
  formData: Customer = new Customer();
  list: Customer[];
  postCustomer() {
    return this.http.post(this.baseURL + '/add', this.formData);
  }

  putCustomer() {
    return this.http.put(`${this.baseURL + '/update'}/${this.formData.customerId}`, this.formData);
  }

  deleteCustomer(id: string) {
    return this.http.delete(`${this.baseURL + '/delete'}/${id}`);
  }

  refreshList() {
    return this.http.get(this.baseURL + '/getall')
    
  }
  login(userName: string, password: string)
  {
    return this.http.get(this.baseURL + 'login?userName='+{userName} + '&&passWord='+{password})
  }
}
