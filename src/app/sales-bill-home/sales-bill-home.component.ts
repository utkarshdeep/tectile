import { Component, OnInit } from '@angular/core';
import {SalesbillService} from '../shared/salesbill.service';

@Component({
  selector: 'app-sales-bill-home',
  templateUrl: './sales-bill-home.component.html',
  styleUrls: ['./sales-bill-home.component.css']
})
export class SalesBillHomeComponent implements OnInit {

  constructor(private salesBillService: SalesbillService) { }

  getBills() {
      console.log(this.salesBillService.bills.length);
      return this.salesBillService.bills;
  }

  ngOnInit() {
  }

}
