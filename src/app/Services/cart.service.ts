import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import { CartDetail } from '../modules/CartDetail';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList:any = [];
  public productList = new BehaviorSubject<any>([]);


  constructor() {
    console.log("service instanciatd")
  }

  getProducts(){
    return this.productList.asObservable();
  }


  addToCart(product : any){
    let detailItem = new CartDetail(product, 1);
    this.cartItemList.push(detailItem);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();

    console.log(this.cartItemList);

  }

  getTotalPrice(){
    let grandTotal = 0;
    this.cartItemList.map((a : CartDetail)=>{
      grandTotal+=(+a.product.price)*(a.quantity);
    })
    return grandTotal;
  }


  removeCartItem(detailPanier: CartDetail){
    this.cartItemList.map((a:CartDetail, index:any)=>{
      if(detailPanier.product.id == a.product.id){
        this.cartItemList.splice(index,1);
        console.log("element removed id is "+detailPanier.product.id);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
}
