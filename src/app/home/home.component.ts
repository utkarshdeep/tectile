import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';
import {LoginComponent} from '../login/login.component';
import {SafeStyle, DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   public bgImagePath: SafeStyle;
    rawImagePath: string;
    inventoryImagePath: string;
    billingImagePath: string;
    transportationImagePath: string;
    receiptImagePath: string;
    challanImagePath: string;
    voucherImagePath: string;
    dispatchImagePath: string;

  constructor(private userService: UserService, private loginComponent: LoginComponent,private sanitization:DomSanitizer) {

      this.rawImagePath = 'assets/img/raw.jpg';
      this.inventoryImagePath = 'assets/img/inventory.jpg';
      this.billingImagePath = 'assets/img/bills.jpeg';
      this.transportationImagePath = 'assets/img/trans.png';
      this.receiptImagePath = 'assets/img/receipt.png';
      this.challanImagePath = 'assets/img/challan.png';
      this.voucherImagePath = 'assets/img/voucher.png';
      this.dispatchImagePath = 'assets/img/dispatch.png';
  }


  ngOnInit() {
  }

  logout() {
    this.userService.logout() ;
    this.loginComponent.resetForm();
  }


}
