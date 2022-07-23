import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../shared/supplier.service';
import { Supplier } from '../shared/supplier.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  constructor(public service: SupplierService) { }
  list:Observable<any> = this.service.refreshList();
  ngOnInit(): void {
  }
  populateForm(selectedRecord:Supplier)
  {
    this.service.formData = Object.assign({}, selectedRecord);
  }
  onDelete(id:number){
    if(confirm('Are you sure to delete this record?'))
    {this.service.deleteSupplier(id).subscribe(
      res => {
        location.reload();
      },
      err => {console.log(err);}
    );}
  }

}
