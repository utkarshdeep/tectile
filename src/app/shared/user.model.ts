export class User {
    constructor(Email: string, Password: string) {
        this.Email = Email;
        this.Password = Password;
    }

    Password: string;
    Email: string;
}
