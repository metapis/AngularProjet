import {Cuteproduct} from "./Cuteproduct";

export class CartDetail {
  product : Cuteproduct;
  quantity : number;

  public constructor(product : Cuteproduct ,quantity : number) {
    this.product = product;
    this.quantity=quantity;
  }


}
