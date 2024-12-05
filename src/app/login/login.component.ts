import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private route:Router){

  }

  email:string=''
  password:string=''

  authenticate(){
    if(this.email==='rj@gmail.com' && this.password==='Arj@123'){
      this.route.navigate(['/admin'])
    }else
    this.route.navigate(['/login'])
  }

}
