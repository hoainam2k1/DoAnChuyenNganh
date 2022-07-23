import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Product} from './product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  readonly baseURL  = 'https://localhost:44373/api/Product';
  formData: Product = new Product();
  list: Product[];
  postProduct() {
    return this.http.post(this.baseURL + '/add', this.formData);
  }

  putProduct() {
    return this.http.put(`${this.baseURL + '/update'}/${this.formData.productId}`, this.formData);
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.baseURL + '/delete'}/${id}`);
  }

  refreshList() {
    return this.http.get(this.baseURL + '/getall')
    
  }
  getProductById(id: number){
    return this.http.get(`${this.baseURL}/${id}`)
  }
}
