import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  userName:any 
  formdata:any
  ngOnInit() { 
     this.formdata = new FormGroup({ 
        userName: new FormControl("Rahul Jadhav")
     }); 
  } 
  onClickSubmit(data:any) {this.userName = data.userName;}

}
