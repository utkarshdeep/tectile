import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Grey} from "./grey.model";
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class GreyService {

    constructor(private router:Router,private http:HttpClient) {
    }

    items: Array<Grey> = new Array<Grey>();

    // // createBill(items: Array<Grey>) {
    //     item.type = 'Unfinished';
    //     this.items.push(item);
    //     this.router.navigate(['/inventory']);
    // }

    getItem():Observable<Grey[]>{
        const uri = "http://localhost:4000/grey";
        const ans = this.http.get<Grey[]>(uri);
        console.log(ans);
        return ans;
    }
}