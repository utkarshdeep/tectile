import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import {UserService} from './shared/user.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SalesBillComponent } from './sales-bill/sales-bill.component';

const appRoutes: Routes = [

    {path: '', component: LoginComponent },
    {path: 'home', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SalesBillComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      ToastrModule.forRoot(),
      BrowserAnimationsModule,
      RouterModule.forRoot(appRoutes)
  ],
    providers: [UserService, LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
