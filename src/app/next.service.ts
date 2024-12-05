import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NextService {

  constructor(private http:HttpClient) { }

  url2='https://fakestoreapi.com/products'

  getNextData(){
    return this.http.get(this.url2)
  }

  url3='http://localhost:8080/show'

  getSpring(){
    return this.http.get(this.url3)
  }

  

}
