import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product.model';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor(public service:ProductService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm)
  {
    if(this.service.formData.productId == 0)
    
      this.insertRecord(form);
      else
      this.updateRecord(form);
    
  }
  insertRecord(form: NgForm)
  {
    this.service.postProduct().subscribe(
      res => {
        this.resetForm(form);
        location.reload();
      },
      err => {console.log(err);}
    );
  }
  updateRecord(form: NgForm)
  {
    this.service.putProduct().subscribe(
      res => {
        this.resetForm(form);
        location.reload();
      },
      err => { console.log(err); }
    );
  }
  resetForm(form: NgForm){
    form.form.reset();
    this.service.formData = new Product();
  }

}
