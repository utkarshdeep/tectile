import {Component, Injectable, OnInit} from '@angular/core';
import {Item} from '../shared/item.model';
import {ItemService} from '../shared/item.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})

@Injectable()
export class InventoryComponent implements OnInit {

    items = [
        new Item('KumKum', 'Dyed',459, 230 , 'Sufficient'),
        new Item('Taare Zameen Par', 'Dyed',789, 90 , 'Sufficient' ),
        new Item('Dhoom', 'Dyed',340, 90 , 'Sufficient' ),
        new Item('Singham', 'Dyed',230, 199, 'Sufficient'  ),
        new Item('Veera', 'Dyed',560, 19, 'Sufficient'  ),
    ];
  constructor(private itemService:ItemService) {
  }

  ngOnInit() {
          this.items.forEach(item => this.itemService.optionUpdate(item))
  }

  /*itemUpdate(){
      this.items.forEach(item => {
          if(this.billService.ItemName===item.ItemName || this.purchaseService.ItemName=== item.ItemName){
              item.Stock = item.Stock - this.billService.Stock + this.purchaseService.Stock
          }
        })
  }*/

}
