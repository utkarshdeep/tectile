import {Component, Injectable, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Item} from "../shared/item.model";
import {GreyService} from "../shared/grey.service";
import {ItemService} from "../shared/item.service";

@Component({
  selector: 'app-grey-purchase',
  templateUrl: './grey-purchase.component.html',
  styleUrls: ['./grey-purchase.component.css']
})

@Injectable()
export class GreyPurchaseComponent implements OnInit {

  constructor(private greyService:GreyService, private itemService:ItemService) { }


    items = Array<Item>();
    length = this.items.length;

    item: Item = new Item(null, '','', '', null,null, '');

    addItemToOrder(form: NgForm) {
        this.length += 1;
        const item = new Item(null, this.item.name,this.item.type, this.item.desc, this.item.amount,this.item.quantity, this.item.option);
        this.items.push(item);
        this.resetOrder();
    }

    resetOrder() {
        this.item.name = '';
        this.item.type = '';
        this.item.desc = '';
        this.item.amount = null;
        this.item.quantity=null;
        this.item.option='';
    }

    deleteOrder(serial: number) {
        console.log('Logging');
        console.log(this.items.length);
        const items = this.items.filter(order => order.id === serial);
        console.log(this.items[4]);
        for (let i = 0; i < this.items.length; i++) {
            console.log(i);
            if (this.items[i].id === serial) {
                this.items.splice(i, 1);
                console.log(this.items.length);
            }
        }
    }

    createBill(form: NgForm) {
        this.greyService.createBill(form.value);
        this.items.forEach(item => this.itemService.addItem(item ));
    }

  ngOnInit() {

      this.items = this.itemService.getItem("Unfinished")
  }

}
