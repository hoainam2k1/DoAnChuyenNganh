import { Customer } from './../shared/customer.model';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(public service: CustomerService) { }
  list:Observable<any> = this.service.refreshList();

  ngOnInit(): void {
    
  }
  populateForm(selectedRecord:Customer)
  {
    this.service.formData = Object.assign({}, selectedRecord);
  }
  onDelete(id:string){
    if(confirm('Are you sure to delete this record?'))
    {this.service.deleteCustomer(id).subscribe(
      res => {
        location.reload();
      },
      err => {console.log(err);}
    );}
  }
  

}
