import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ISalesBill} from './salesBill';
import {SalesbillModel} from './salesbill.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SalesbillService {

    constructor(private router: Router, private http: HttpClient) { }


    createBill(bill: SalesbillModel) {
        bill.type = 'Finish Sales (GST)';
        console.log(bill.type);
        this.bills.push(bill);
        console.log('done with it');
        console.log(this.bills.length);
        this.router.navigate(['/sales-home']);
    }

    getAllBills() {
        return this.bills;
    }

    getBills(): Observable<ISalesBill[]> {
        const uri = 'http://localhost:4000/salesbill';
        const ans = this.http.get<ISalesBill[]>(uri);
        console.log(ans);
        return ans;
    }
}
