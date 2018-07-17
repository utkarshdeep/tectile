import {Injectable} from "@angular/core";
import {Item} from "./item.model";
import {Router} from "@angular/router";
import {ItemService} from "./item.service";

@Injectable()
export class GreyService {

    constructor(private router:Router,private itemService:ItemService) {
    }

    items: Array<Item> = new Array<Item>();

    createBill(item: Item) {
        item.type = 'Unfinished';
        this.items.push(item);
        console.log(item);
        this.router.navigate(['/tracking']);
    }
}