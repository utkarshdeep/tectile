import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import {UserService} from './shared/user.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SalesBillComponent } from './sales-bill/sales-bill.component';
import {SalesbillService} from './shared/salesbill.service';
import { InventoryComponent } from './inventory/inventory.component';
import {ItemService} from './shared/item.service';
import { DeadstockComponent } from './deadstock/deadstock.component';
import { SalesBillHomeComponent } from './sales-bill-home/sales-bill-home.component';
import { GreyPurchaseComponent } from './grey-purchase/grey-purchase.component';
import { MillComponent } from './mill/mill.component';
import {GreyService} from "./shared/grey.service";
import {PersistenceModule} from "angular-persistence";

const appRoutes: Routes = [
    {path: '', component: LoginComponent },
    {path: 'home', component: HomeComponent},
    {path: 'sales_bill', component: SalesBillComponent},
    {path: 'inventory', component: InventoryComponent},
    {path: 'deadstock', component: DeadstockComponent},
    {path: 'sales-home', component: SalesBillHomeComponent},
    {path: 'grey', component: GreyPurchaseComponent},
    {path: 'mill', component: MillComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SalesBillComponent,
    InventoryComponent,
    DeadstockComponent,
    SalesBillHomeComponent,
    GreyPurchaseComponent,
    MillComponent,
  ],
  imports: [
    BrowserModule,
      FormsModule,
      ToastrModule.forRoot(),
      BrowserAnimationsModule,
      RouterModule.forRoot(appRoutes),
      HttpClientModule
  ],
    providers: [UserService, LoginComponent, SalesBillComponent, SalesbillService, ItemService, GreyPurchaseComponent, GreyService],
  bootstrap: [AppComponent]
})
export class AppModule { }