import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerService } from '../shared/customer.service';
import { NgForm } from '@angular/forms';
import { Customer } from './../shared/customer.model';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public service:CustomerService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm)
  {
    if(this.service.formData.customerId != null)
    
      this.insertRecord(form);
      location.href="./login";
  }
  insertRecord(form: NgForm)
  {
    this.service.postCustomer().subscribe(
      res => {
           
      },
      err => {console.log(err);}
    );
  }

}
