import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

import plivo = require('plivo');

//import { plivo } from 'plivo'
@Injectable()
export class MessageService {

    params = {
        'src': '919588288157',
        'dst' : '919793566416',
        'text' : "Hello, how are you?"
    };
    p = null;

    constructor(private router:Router) {
        this.p = plivo.RestAPI({
            authId: 'MAODK0NJMYMDAWMDGWOD',
            authToken: 'YjEwZTFlYjdlYThjZWZlNWIwMTMzZDA0NjJhNGM3'
          });
    }

    sendMessage(msg:string){
        console.log('Method Called')
        this.params.text = msg;
        this.p.send_message(this.params, function (status, response) {
            console.log('Status: ', status);
            console.log('API Response:\n', response);
        });
    }

}