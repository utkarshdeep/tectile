import {SalesbillModel} from './salesbill.model';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class SalesbillService {
    constructor(private router: Router) { }

    bills: Array<SalesbillModel> = new Array<SalesbillModel>();


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
}
