import { Component } from '@angular/core';
import { FakeApiService } from './fake-api.service';
import { NextService } from './next.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RoutingProject';

  M=''
  ApiData:any

  constructor(private service:NextService){
    // this.M=this.service.message
  }

  //getData(){
    // this.service.getData().subscribe(data=>{console.log(data)})
    // this.service.getData().subscribe(data=>{
    //   this.ApiData=data

    //})
    

    getNextData(){
      this.service.getNextData().subscribe(data=>{ 
        this.ApiData=data

      })

  }
  
  mydata:any

  getSpring(){
    this.service.getSpring().subscribe(x=>{
      this.mydata=x
    })
  }
}
