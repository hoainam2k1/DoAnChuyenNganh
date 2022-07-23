import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  cusID = localStorage.getItem('customerId')
  ngOnInit(): void {    
  }
  logout(){
    localStorage.removeItem('customerId')
    location.reload()
  }
}
