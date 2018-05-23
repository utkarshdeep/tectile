import {Item} from "./item.model";
import {Injectable} from "@angular/core";



@Injectable()
export class ItemService {
    constructor() {
    }

    optionUpdate(item:Item) {
        if(item.Stock <= 20) {
            item.Option = 'Order Please !' ;
        }
    }
}

