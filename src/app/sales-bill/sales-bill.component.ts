import {Component, Injectable, OnInit} from '@angular/core';
import {OrderModel} from '../shared/order.model';
import {NgForm} from '@angular/forms';
import {SalesbillService} from '../shared/salesbill.service';
import {Item} from '../shared/item.model';
import {ItemService} from '../shared/item.service';
import {IItem} from '../shared/item';

@Component({
  selector: 'app-sales-bill',
  templateUrl: './sales-bill.component.html',
  styleUrls: ['./sales-bill.component.css']
})

@Injectable()
export class SalesBillComponent implements OnInit {

    public finishedItems: Array<Item> = [];

    private item  = new Item(1, '', '', '', 0, 0, '');

    constructor(private salesBillService: SalesbillService, private itemService: ItemService) { }

    orders = [
        new OrderModel(1, 'Utkarsh', 'Deep', '979865789'),
        new OrderModel(2, 'Utkarsh', 'Deep', '979865789'),
        new OrderModel(3, 'Utkarsh', 'Deep', '979865789'),
        new OrderModel(4, 'Utkarsh', 'Deep', '979865789'),
        new OrderModel(5, 'Utkarsh', 'Deep', '979865789')
    ];

    items =  [

    ];

    id = 0;

    quanityTotal = 0;

    totalAmount = 0;

    order: OrderModel = new OrderModel(this.orders.length + 1, '', '', '');


    setNewItem(item: Item) {
        console.log(item);
        this.item = item; //this.finishedItems.filter(x => x._id === item).pop();

    }

    addItemToOrder(form: NgForm) {
        console.log('hi');
        console.log(form.value);
        const id = form.value._id;
        const item = this.finishedItems.filter(x => x._id === id).pop();
        const newItem = new Item(id, item.name, item.type, item.desc, item.amount, form.value.quantity, item.option);
        const alreadyItem = this.items.filter(x => x._id === id);
        if (alreadyItem.length === 0) {
            this.items.push(newItem);
        } else {
            this.items.map(x => {
                if (x._id === id) {
                    x.quantity = Number(x.quantity) + Number(newItem.quantity);
                }
            });
        }
        console.log(this.items);
        this.quanityTotal = this.items.reduce((acc, cur) => Number(acc) + Number(cur.quantity), Number(0));
        this.totalAmount = this.items.reduce((acc, cur) => acc + cur.quantity * cur.amount , 0);
        this.resetOrder();
    }

    resetOrder() {
        this.order.f_name = '';
        this.order.l_name = '';
        this.order.mobile = '';
    }

    deleteOrder(serial: number) {
        console.log('Logging');
        console.log(this.orders.length);
        const order = this.orders.filter(order => order.serial === serial);
        console.log(this.orders[4]);
        for (let i = 0; i < this.orders.length; i++) {
            console.log(i);
            if (this.orders[i].serial === serial) {
                this.orders.splice(i, 1);
                console.log(this.orders.length);
            }
        }
    }

    createBill(form: NgForm) {
        console.log('Hi creating bill!!!!');
        //console.log(form.value);
        this.salesBillService.createBill(form.value, this.items);
    }

  ngOnInit() {
      this.itemService.getItemsByType('Finished').subscribe(data => this.finishedItems = data);
  }

}
