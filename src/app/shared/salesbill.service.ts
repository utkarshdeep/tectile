import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ISalesBill} from './salesBill';
import {SalesbillModel} from './salesbill.model';
import {Item} from './item.model';
import {SalesBillComponent} from '../sales-bill/sales-bill.component';
import {SalesBillHomeComponent} from '../sales-bill-home/sales-bill-home.component';
import {ItemService} from './item.service';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SalesbillService {

    constructor(private router: Router, private http: HttpClient, private itemService: ItemService) { }


    createBill(bill: SalesbillModel, items: Array<Item>) {
        bill.type = 'Finish Sales (GST)';
        console.log(bill.type);
        console.log('done with it');
        bill.items = items;
        const uri = 'http://localhost:4000/salesbill/add';
        console.log(bill);
        const ans = this.http.post(uri, bill).subscribe(res => console.log('Done'));
        console.log('Did the http call');
        this.router.navigate(['/sales-home']);
    }

    getBills(): Observable<SalesbillModel[]> {
        const uri = 'http://localhost:4000/salesbill';
        const ans = this.http.get<SalesbillModel[]>(uri);
        console.log(ans);
        return ans;
    }
}
