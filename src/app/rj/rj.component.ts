import { Component } from '@angular/core';

@Component({
  selector: 'app-rj',
  templateUrl: './rj.component.html',
  styleUrls: ['./rj.component.css']
})
export class RjComponent {

  myname="Rahul jadhav from ts";

  array=["Rahul","Ashu","Harsh","Om","Shubhs","Nikhs"];

  color1="red";
  color2="green"

  change(){
    this.color1

  }

  array2=[
    {
    "id":1,
    "name":"Rahul Jadhav",
    "domain":"Developer",
    "salary":100000
  },
  {
    "id":2,
    "name":"Ashu Jadhav",
    "domain":"Tester",
    "salary":100000
  },
  {
    "id":3,
    "name":"Anand r",
    "domain":"Automation",
    "salary":500000
  },
  {
    "id":5,
    "name":"Shubhs R",
    "domain":"Oil corporation",
    "salary":77000
  },



    


  ]



}
