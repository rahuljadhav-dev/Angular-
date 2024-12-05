import { Component } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
>>>>>>> 8c6b4307b80efb8a147521129d8e529143b9597c

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
<<<<<<< HEAD
  constructor(private route:Router){

  }

  email:string=''
  password:string=''

  authenticate(){
    if(this.email==='rj@gmail.com' && this.password==='Arj@123'){
      this.route.navigate(['/admin'])
    }else
    this.route.navigate(['/login'])
=======
  username: string = '';
  password: string = '';

  onSubmit() {
    if (this.username && this.password) {
      console.log(`Logging in with username: ${this.username} and password: ${this.password}`);
      // Authentication logic would go here
    } else {
      console.log('Please enter both username and password.');
    }
>>>>>>> 8c6b4307b80efb8a147521129d8e529143b9597c
  }

}
