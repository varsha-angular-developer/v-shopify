import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public products:any=[];
  public grandTotal!:number;
  constructor(private cartService:CartService){}
  ngOnInit():void{
    this.getProducts()
  }
getProducts(){
  this.cartService.getProducts()
  .subscribe((res:any)=>{
    this.products=res;
    this.grandTotal=this.cartService.getTotalPrice();
  })
}

  removeItem(item: any) {
    this.cartService.removeCartItem(item);
    this.cartService.getProducts().subscribe((res: any) => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    });
  }
}
