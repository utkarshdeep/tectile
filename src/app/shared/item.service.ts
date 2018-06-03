import {Item} from './item.model';
import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IItem} from './item';
import {ISalesBill} from './salesBill';



const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ItemService implements OnInit {

    items =  [
        new Item('6878', 'Vanilla', 'Unfinished', 'Plain Cloth', 567, 80, 'Sufficient'),
    ];


    itemArray: Array<Item> = new Array<Item>();

    constructor(private http: HttpClient) {

    }



    updateItemById(id: string, item: Item) {
        const uri = 'http://localhost:4000/item/update/' + id;
        console.log(item.quantity);
        return this.http.put(uri, new Item('', '', '', '', 0, item.quantity, ''), httpOptions).subscribe(res => console.log(res));
    }

    updateItems(items: Array<Item>) {
        items.forEach(x => this.updateItemById(x._id, x));
    }



    getItemsByType(type: string): Observable<Item[]> {
        const uri = 'http://localhost:4000/item/type/' + type;
        const ans = this.http.get<Item[]>(uri);
        console.log(ans);
        return ans;
    }

    optionUpdate(item: Item) {
        if (item.quantity <= 20) {
            item.option = 'Order Please !' ;
        }
    }

    addItem(item: Item) {
        if (JSON.parse(localStorage.getItem('itemData')) == null) {
            this.items.push(item);
            localStorage.setItem('itemData', JSON.stringify(this.items));
        } else {
            let array = JSON.parse(localStorage.getItem('itemData'));
            array.push(item);
            localStorage.removeItem('itemData');
            localStorage.setItem('itemData', JSON.stringify(array));
        }

    }

    getItem(type: string) {
       this.items.forEach(item => {
            if (item.type == type) {
               this.itemArray.push(item);
            }
        });
        return this.itemArray;
    }

    updateItem(updatedItem: Item) {
     this.items.forEach(item => {
         if (item.type == updatedItem.type && item._id == updatedItem._id) {
             item.quantity = updatedItem.quantity;
         }
     });
    }
    ngOnInit() {
    }
}

