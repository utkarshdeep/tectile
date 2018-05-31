import {Component, OnInit} from '@angular/core';
import {Item} from "./shared/item.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{



  title = 'app';

    ngOnInit(): void {
    }

}

