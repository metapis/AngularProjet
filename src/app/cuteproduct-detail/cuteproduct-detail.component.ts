import { Component } from '@angular/core';
import { Cuteproduct } from '../modules/Cuteproduct';
import { CuteProductService } from '../Services/cute-product.service';
import {ActivatedRoute} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-cuteproduct-detail',
  templateUrl: './cuteproduct-detail.component.html',
  styleUrls: ['./cuteproduct-detail.component.css']
})
export class CuteproductDetailComponent {
  public product !: Cuteproduct;
  addButton: boolean=false;
  constructor(private productService : CuteProductService, private  route : ActivatedRoute,private cartservice: CartService) {}

  ngOnInit(): void {
    const productId : number = this.route.snapshot.params['id'];
    this.getProduct(productId);
  }

  public getProduct(productId : number): void {
    this.productService.getProductById(productId).subscribe(
      (response: Cuteproduct) => {
        this.product = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  addToCart() {
    this.cartservice.addToCart(this.product);

  }
}
