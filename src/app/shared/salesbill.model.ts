import {OrderModel} from './order.model';
import {Item} from './item.model';

export class SalesbillModel {

    constructor(type: string, voucher: string, items: Array<Item>) {
            this.type = 'Finish Sales (GST)';
            this.voucher = voucher;
            this.items = items;
    }

    type: string;
    voucher: string;
    items: Array<Item>;

}
