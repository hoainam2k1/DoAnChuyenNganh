import { Injectable } from '@angular/core';
import { Supplier } from './supplier.model';
import {HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private http: HttpClient) { }
  readonly baseURL  = 'https://localhost:44373/api/Supplier';
  formData: Supplier = new Supplier();
  list: Supplier[];
  

  postSupplier() {
    return this.http.post(this.baseURL + '/add', this.formData);
  }

  putSupplier() {
    return this.http.put(`${this.baseURL + '/update'}/${this.formData.supplierId}`, this.formData);
  }

  deleteSupplier(id: number) {
    return this.http.delete(`${this.baseURL + '/delete'}/${id}`);
  }

  refreshList() {
    return this.http.get(this.baseURL + '/getall')
    
  }

}
