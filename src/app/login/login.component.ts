import { Component, OnInit } from '@angular/core';
import {User} from '../shared/user.model';
import {NgForm} from '@angular/forms';
import { UserService } from '../shared/user.service';
import { ToastrService } from 'ngx-toastr';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  user: User = new User('c', 'c');
  constructor(private userService: UserService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
  }

    resetForm(form?: NgForm) {
        if (form != null) {
            form.reset();
        }
        this.user = {
            Password: '',
            Email: ''
        };
    }

    OnSubmit(form: NgForm) {
        console.log(form.value);
      const msg = this.userService.loginUser(form.value);
    }

}
