import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    if (this.username && this.password) {
      console.log(`Logging in with username: ${this.username} and password: ${this.password}`);
      // Authentication logic would go here
    } else {
      console.log('Please enter both username and password.');
    }
  }

}
