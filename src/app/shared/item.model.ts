export class Item {

    ItemName: string;
    ItemDesc: string;
    Amount : number;
    Stock : number;
    Option : string;

    constructor(ItemName: string, ItemDesc: string, Amount : number, Stock : number, Option: string) {
        this.ItemName = ItemName;
        this.ItemDesc = ItemDesc;
        this.Amount = Amount;
        this.Stock = Stock;
        this.Option = Option;
    }
}