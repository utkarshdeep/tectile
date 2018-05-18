import { Injectable } from '@angular/core';
import {User} from './user.model';
import {Router} from '@angular/router';
import {LoginComponent} from '../login/login.component';


const users = [
    new User('admin', 'admin' ),
    new User('guest', 'guest' )
];


@Injectable()
export class UserService {

  constructor(private router: Router) { }

    loginUser(user: User) {
      console.log('Into User');
      const authenticatedUser = users.find(u => u.Email === user.Email);
        console.log(authenticatedUser);
        if (authenticatedUser && authenticatedUser.Password === user.Password) {
            localStorage.setItem('user', authenticatedUser.Email);
            return true;
        }
        return false;
    }


    logout() {
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
    }


    checkCredentials() {
        if (localStorage.getItem('user') === null) {
            this.router.navigate(['Login']);
        }
    }

}
