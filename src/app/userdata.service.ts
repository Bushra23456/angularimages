import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  private api='https://fakestoreapi.com/products';
  constructor(private abc : HttpClient) { }
  getdata(){
    return this.abc.get(this.api);
  }
}
