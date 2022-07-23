import { Component, OnInit } from '@angular/core';
import { Customer } from '../shared/customer.model';
import { CustomerService } from '../shared/customer.service';
import { NgForm } from '@angular/forms';
import { Observable, tap } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public service:CustomerService) { }
  listCustomer:any;
  list:Observable<any> = this.service.refreshList().pipe(tap((data) =>{this.listCustomer = data}));
  
  ngOnInit(): void {
  }
  onSubmit(form: NgForm)
  {
    if(this.service.formData.customerId != null)
    {
      this.list.subscribe((data) => {
        const account = this.listCustomer.find((item:any) => item.customerId === form.value.customerId)
        if(account != null)
        {
          alert("Wellcome " + account.contactName)
          
          location.href="./home";
          localStorage.setItem('customerId', JSON.stringify(account.customerId))

        }
        else
        {
          alert("Error!")
        }
      })
      
      // const account = this.listCustomer.find((item:any) => item.customerId === form.value.customerId)
      // console.log(account)
      // const account = this.listCustomer.filter((item:any) => item.customerId === form.value.customerId && item.passWord === form.value.passWord)
      // console.log(account)
      // if(this.insertRecord(form.value.customerId,form.value.passWord) == true)
      // {
      //   
      // }      
    }
  }


}
