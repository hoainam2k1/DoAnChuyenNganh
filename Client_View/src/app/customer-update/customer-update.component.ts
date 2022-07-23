import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerService } from '../shared/customer.service';
import { NgForm } from '@angular/forms';
import { Customer } from './../shared/customer.model';
@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {

  constructor(public service:CustomerService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm)
  {
    if(this.service.formData.customerId == null)
    
      this.insertRecord(form);
      else
      this.updateRecord(form);
    
  }
  insertRecord(form: NgForm)
  {
    this.service.postCustomer().subscribe(
      res => {
        this.resetForm(form);
        location.reload();
      },
      err => {console.log(err);}
    );
  }
  updateRecord(form: NgForm)
  {
    this.service.putCustomer().subscribe(
      res => {
        this.resetForm(form);
        location.reload();
      },
      err => { console.log(err); }
    );
  }
  resetForm(form: NgForm){
    form.form.reset();
    this.service.formData = new Customer();
  }

}
