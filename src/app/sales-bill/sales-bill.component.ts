import { Component, OnInit } from '@angular/core';
import {OrderModel} from '../shared/order.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-sales-bill',
  templateUrl: './sales-bill.component.html',
  styleUrls: ['./sales-bill.component.css']
})
export class SalesBillComponent implements OnInit {
    orders = [
        new OrderModel(1, 'Utkarsh', 'Deep', '979865789'),
        new OrderModel(2, 'Utkarsh', 'Deep', '979865789'),
        new OrderModel(3, 'Utkarsh', 'Deep', '979865789'),
        new OrderModel(4, 'Utkarsh', 'Deep', '979865789'),
        new OrderModel(5, 'Utkarsh', 'Deep', '979865789')
    ];

    id = this.orders.length;

    order: OrderModel = new OrderModel(this.orders.length + 1, '', '', '');

    addItemToOrder(form: NgForm) {
        console.log('hi')
        this.id += 1;
        const order = new OrderModel(this.id, this.order.f_name, this.order.l_name, this.order.mobile);
        this.orders.push(order);
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

  constructor() { }

  ngOnInit() {
  }

}
