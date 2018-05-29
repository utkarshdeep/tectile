import {Item} from "./item.model";
import {Injectable, OnInit} from "@angular/core";



@Injectable()
export class ItemService implements OnInit{

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
        if(JSON.parse(localStorage.getItem('itemData'))==null) {
            this.items.push(item);
            localStorage.setItem('itemData', JSON.stringify(this.items));
        }
        else{
            var array = JSON.parse(localStorage.getItem('itemData'))
            array.push(item);
            localStorage.removeItem('itemData');
            localStorage.setItem('itemData', JSON.stringify(array));
        }

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
         if(item.type==updatedItem.type && item.id==updatedItem.id){
             item.quantity = updatedItem.quantity;
         }
     })
    }
    ngOnInit() {
    }
}

