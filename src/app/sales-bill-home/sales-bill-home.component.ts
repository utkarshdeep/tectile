import { Component, OnInit } from '@angular/core';
import {SalesbillService} from '../shared/salesbill.service';

@Component({
  selector: 'app-sales-bill-home',
  templateUrl: './sales-bill-home.component.html',
  styleUrls: ['./sales-bill-home.component.css']
})
export class SalesBillHomeComponent implements OnInit {

    public salesbills = [];

  constructor(private salesBillService: SalesbillService) { }

  ngOnInit() {
      this.salesBillService.getBills()
          .subscribe(data => this.salesbills = data);
  }

}
