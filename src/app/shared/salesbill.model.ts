import {OrderModel} from './order.model';

export class SalesbillModel {

    constructor(type: string, voucher: string, orders: Array<OrderModel>) {
            this.type = 'Finish Sales (GST)';
            this.orders = orders;
            this.voucher = voucher;
    }

    type: string;
    orders: Array<  OrderModel>;
    voucher: string;

}
