export class Grey {

    _id: object;
    mill: string;
    taka: string;
    length: number;
    rate : string;
    weight : number;
    type : string;

    constructor(_id: object, mill: string, taka:string, length:number,rate : string, weight : number, type: string)
    {
        this._id = _id;
        this.mill = mill;
        this.taka = taka;
        this.length = length;
        this.rate = rate;
        this.weight = weight;
        this.type = type;
    }
}