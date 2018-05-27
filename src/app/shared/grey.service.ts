import {Injectable} from "@angular/core";
import {Item} from "./item.model";
import {Router} from "@angular/router";

@Injectable()
export class GreyService {

    constructor(private router:Router) {
    }

    items: Array<Item> = new Array<Item>();

    createBill(item: Item) {
        item.type = 'Unfinished';
        console.log(item.type);
        this.items.push(item);
        console.log('done with it');
        console.log(this.items.length);
        this.router.navigate(['/inventory']);
    }
}