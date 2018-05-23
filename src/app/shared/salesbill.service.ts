import {SalesbillModel} from './salesbill.model';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class SalesbillService {
    constructor(private router: Router) { }


    createBill(bill: SalesbillModel) {
        bill.type = 'Finish Sales (GST)';
        console.log(bill.type);
    }
}
