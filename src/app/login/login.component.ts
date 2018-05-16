import { Component, OnInit } from '@angular/core';
import {User} from '../shared/user.model';
import {NgForm} from '@angular/forms';
import { UserService } from '../shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  constructor(private userService: UserService, private toastr: ToastrService) { }

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
      const msg = this.userService.registerUser(form.value);
      if (msg === 'Success') {
          this.resetForm(form);
          this.toastr.success('User registration successful');
      } else {
          this.toastr.error('Incorrect credentials');
          }
       console.log('hi');
    }

}
