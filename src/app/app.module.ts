import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SincronizerComponent } from './sincronizer/sincronizer.component';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { PaymentComponent } from './payment/payment.component';
 
const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'user', component: UserComponent},
  { path: 'product', component: ProductComponent},
  { path: 'payment', component: PaymentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SincronizerComponent,
    MenuComponent,
    UserComponent,
    ProductComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    FormsModule,
    HttpClientModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
    }),
  ],
  providers: [SincronizerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
