import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { SupplierService } from 'src/app/shared/supplier.service';
import { NgForm } from '@angular/forms';
import { Supplier } from 'src/app/shared/supplier.model';

@Component({
  selector: 'app-supplier-add',
  templateUrl: './supplier-add.component.html',
  styleUrls: ['./supplier-add.component.css']
})
export class SupplierAddComponent implements OnInit {

  constructor(public service:SupplierService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm)
  {
    if(this.service.formData.supplierId == 0)
    
      this.insertRecord(form);
      else
      this.updateRecord(form);
    
  }
  insertRecord(form: NgForm)
  {
    this.service.postSupplier().subscribe(
      res => {
        this.resetForm(form);
        location.reload();
      },
      err => {console.log(err);}
    );
  }
  updateRecord(form: NgForm)
  {
    this.service.putSupplier().subscribe(
      res => {
        this.resetForm(form);
        location.reload();
      },
      err => { console.log(err); }
    );
  }
  resetForm(form: NgForm){
    form.form.reset();
    this.service.formData = new Supplier();
  }

}
