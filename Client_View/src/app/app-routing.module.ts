import { CustomerComponent } from './customer/customer.component';
import { SupplierComponent } from './supplier/supplier.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';
import { AllorderComponent } from './allorder/allorder.component';
const routes: Routes = [
  {
    path: 'home', component:HomeComponent
  },
  {
    path: 'supplier', component:SupplierComponent
  },
  {
    path: 'customer', component:CustomerComponent
  },
  {
    path: 'product', component:ProductComponent
  },
  {
    path: 'login', component:LoginComponent
  },
  {
    path: 'carts', component:CartComponent
  },
  {
    path: 'order', component:OrderComponent
  },
  {
  path:'order/details', component:OrderdetailComponent
  },
  {
  path:'listorder', component:AllorderComponent
  },
  {
    path: 'login/register', component:RegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
