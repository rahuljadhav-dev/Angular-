import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {


  constructor(private http:HttpClient) { }
  message='hey rahul i am from the service class'
  url='https://jsonplaceholder.typicode.com/photos'

  getData(){
    return this.http.get(this.url)
    
  }

  // get()
  // post()
  // put()
  // delete()
}
