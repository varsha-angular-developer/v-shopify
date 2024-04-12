import { Component } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  public productList:any;
  constructor(private inv_ser:InventoryService , private cartService:CartService, private router: Router,){}
  ngOnInit():void{
    this.inv_ser.getProduct()
    .subscribe(res=>{
      this.productList=res;
      this.productList.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      })
    })
  }
addtocart(item:any){
     this.cartService.addtoCart(item)
    //  this.router.navigate(['/cart']); 
}
}
