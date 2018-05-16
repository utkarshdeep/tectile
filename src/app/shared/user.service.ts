import { Injectable } from '@angular/core';
import {User} from './user.model';

@Injectable()
export class UserService {

  constructor() { }

    registerUser(user: User) {
        const body: User = {
            Password: user.Password,
            Email: user.Email,
        };
        console.log('In register user');
        if (user.Email === 'k') {
            return 'Success';
        } else {
            return 'Success';
        }
    }

}
