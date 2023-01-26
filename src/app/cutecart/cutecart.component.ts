import {Component, OnInit} from '@angular/core';
import {Cuteproduct} from "../modules/Cuteproduct";
import {CartDetail} from "../modules/CartDetail";
import {CuteProductService} from "../Services/cute-product.service";
import {CartService} from "../Services/cart.service";

class cartDetail {
}

@Component({
  selector: 'app-cart',
  templateUrl: './cutecart.component.html',
  styleUrls: ['./cutecart.component.css']
})
export class CutecartComponent implements OnInit {

  public cartDetailList: CartDetail[];
  public grandtotal : number = 0;
  cartProducts:any[] = [];

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res =>{
        this.cartDetailList=res;
        this.grandtotal = this.cartService.getTotalPrice();
        console.log("-------------->"+res);
      });

    console.log("le service has "+this.cartService.cartItemList);
  }


  addAmount(index:number) {
    this.cartProducts[index].quantity++
    this.getTotalPrice()
    localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
  }

  constructor(private cartService: CartService) {
    this.cartDetailList = new Array<CartDetail>();
  }
  removeCartItem(item: any){
    this.cartService.removeCartItem(item);
  }
  removeAllCart(){
    this.cartService.removeAllCart();

  }
  getTotalPrice() {
    this.grandtotal = 0
    for(let x in this.cartDetailList) {
      this.grandtotal += this.cartDetailList[x].product.price * this.cartDetailList[x].quantity;
    }
  }
  minsAmount(index:number) {
    this.cartProducts[index].quantity--
    this.getTotalPrice()
    localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
  }
  detectChange() {
    this.getTotalPrice()
    localStorage.setItem("cart" , JSON.stringify(this.cartDetailList))
  }
}
