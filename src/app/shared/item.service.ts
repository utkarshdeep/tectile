import {Item} from "./item.model";
import {Injectable} from "@angular/core";



@Injectable()
export class ItemService {

    items =  [
        new Item(6878, 'Vanilla','Unfinished', 'Plain Cloth', 567,80, 'Sufficient'),
    ];

    itemArray:Array<Item> = new Array<Item>();

    constructor() {
    }

    optionUpdate(item:Item) {
        if(item.quantity <= 20) {
            item.option = 'Order Please !' ;
        }
    }

    addItem(item:Item){
        this.items.push(item);
    }

    getItem(type:string) {
        this.items.forEach(item=> {
            if(item.type==type) {
               this.itemArray.push(item);
            }
        });
        return this.itemArray;
    }

    updateItem(updatedItem:Item){
     this.items.forEach(item=> {
         if(item.type==updatedItem.type && item._id==updatedItem._id){
             item.quantity = updatedItem.quantity;
         }
     })
    }
}

