import { Component } from '@angular/core';

@Component({
  selector: 'app-formsp',
  templateUrl: './formsp.component.html',
  styleUrls: ['./formsp.component.css']
})
export class FormspComponent {

  register(data:any){
    console.log(data.value);
  }
  

}
