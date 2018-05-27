export class Item {

    id: number;
    name: string;
    type: string;
    desc: string;
    amount : number;
    quantity : number;
    option : string;

    constructor(id: number, name: string, type:string, desc:string,amount : number, quantity : number, option: string)
        {
            this.id = id;
            this.name = name;
            this.type = type;
            this.desc = desc;
            this.amount = amount;
            this.quantity = quantity;
            this.option = option;
        }
}