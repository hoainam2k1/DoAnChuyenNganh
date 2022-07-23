import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public service: ProductService) { }
  list:Observable<any> = this.service.refreshList();
  ngOnInit(): void {
  }
  populateForm(selectedRecord:Product)
  {
    this.service.formData = Object.assign({}, selectedRecord);
  }
  onDelete(id:number){
    if(confirm('Are you sure to delete this record?'))
    {this.service.deleteProduct(id).subscribe(
      res => {
        location.reload();
      },
      err => {console.log(err);}
    );}
  }

}
