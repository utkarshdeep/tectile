import {Component, Injectable, OnInit} from '@angular/core';
import {Item} from '../shared/item.model';
import {ItemService} from '../shared/item.service';
import {SalesbillService} from "../shared/salesbill.service";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})

@Injectable()
export class InventoryComponent implements OnInit {
    items: Array<Item>;

  constructor(private itemService:ItemService, private billService:SalesbillService) {
      this.items = itemService.items;
  }

  ngOnInit() {
          this.items.forEach(item => this.itemService.optionUpdate(item));
  }
}
