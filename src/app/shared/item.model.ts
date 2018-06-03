export class Item {

    _id: string;
    name: string;
    type: string;
    desc: string;
    amount : number;
    quantity : number;
    option : string;

    constructor(_id: string, name: string, type:string, desc:string,amount : number, quantity : number, option: string)
        {
            this._id = _id;
            this.name = name;
            this.type = type;
            this.desc = desc;
            this.amount = amount;
            this.quantity = quantity;
            this.option = option;
        }
}