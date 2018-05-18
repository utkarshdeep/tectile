import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService, private loginComponent: LoginComponent) { }

  ngOnInit() {
  }

  logout() {
    this.userService.logout() ;
    this.loginComponent.resetForm();
  }

}
