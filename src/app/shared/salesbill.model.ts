import {OrderModel} from './order.model';

export class SalesbillModel {

    constructor(type: string, voucher: string) {
            this.type = 'Finish Sales (GST)';
            this.voucher = voucher;
    }

    type: string;
    voucher: string;

}
