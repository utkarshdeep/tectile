import {Component, Injectable, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Item} from "../shared/item.model";
import {GreyService} from "../shared/grey.service";
import {ItemService} from "../shared/item.service";
import {UserService} from "../shared/user.service";
import {LoginComponent} from "../login/login.component";
import {Grey} from "../shared/grey.model";

@Component({
  selector: 'app-grey-purchase',
  templateUrl: './grey-purchase.component.html',
  styleUrls: ['./grey-purchase.component.css']
})

@Injectable()
export class GreyPurchaseComponent implements OnInit {

  constructor(private greyService:GreyService, private userService:UserService, private loginComponent:LoginComponent){ }


    items = Array<Grey>();
    length = this.items.length;

    grey: Grey = new Grey(null, '','', null, null,null, '');

    addItemToOrder(form: NgForm) {
        this.length += 1;
        const grey = new Grey(this.grey._id, this.grey.mill,this.grey.taka,this.grey.length,this.grey.rate,this.grey.weight,this.grey.type);
        this.items.push(grey);
        this.greyService.createBill(this.items);
        this.resetOrder();
    }

    resetOrder() {
        this.grey.mill = '';
        this.grey.taka = '';
        this.grey.length = null;
        this.grey.rate = null;
        this.grey.weight=null;
        this.grey.type='';
    }

    // deleteOrder(serial: string) {
    //     console.log('Logging');
    //     console.log(this.items.length);
    //     const items = this.items.filter(order => order._id === serial);
    //     console.log(this.items[4]);
    //     for (let i = 0; i < this.items.length; i++) {
    //         console.log(i);
    //         if (this.items[i]._id === serial) {
    //             this.items.splice(i, 1);
    //             console.log(this.items.length);
    //         }
    //     }
    // }

  ngOnInit() {
       this.greyService.getItem().subscribe(data => this.items=data);
      console.log(this.items);
  }

    logout() {
        this.userService.logout() ;
        this.loginComponent.resetForm();
    }
}
