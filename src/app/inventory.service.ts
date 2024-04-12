import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http:HttpClient) { }
  getProduct()
  {
    return this.http.get<any>("https://fakestoreapi.com/products")
    // .pipe(map((res:any)=>{
    //   return res;
    // }))
  
  }
}
