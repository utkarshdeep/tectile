import { Injectable } from '@angular/core';
import {User} from './user.model';
import {Router} from '@angular/router';


const users = [
    new User('admin', 'admin' ),
    new User('guest', 'guest' )
];


@Injectable()
export class UserService {

  constructor(private router: Router) { }

    loginUser(user: User) {
      const authenticatedUser = users.find(u => u.Email === user.Email);
        if (authenticatedUser && authenticatedUser.Password === user.Password) {
            localStorage.setItem('user', authenticatedUser.Email);
            this.router.navigate(['/home']);
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
