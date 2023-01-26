 import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CuteproductItemComponent } from '../cuteproduct-item/cuteproduct-item.component';
import { Cuteproduct } from '../modules/Cuteproduct';
import { HttpClient } from '@angular/common/http';
import {CuteProductService} from "../Services/cute-product.service";
import {Response} from "../modules/Response";
import {HttpErrorResponse} from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuteproductlist',
  templateUrl: './cuteproductlist.component.html',
  styleUrls: ['./cuteproductlist.component.css']
})
export class CuteproductlistComponent  implements OnInit{
  products: Cuteproduct[];
  word: string='';

  constructor(private cuteproductService : CuteProductService, private route: Router) {
    this.products=new Array<Cuteproduct>();
  }
  ngOnInit() {
    this.getProducts();
  }
    test(){
      this.cuteproductService.getProductByKey(this.word)
      .subscribe((val:any)=>{
        this.products=val.products
      })
    }

  public getProducts(): void {
    this.cuteproductService.getProducts().subscribe(
      (response: Response) => {
        this.products = response.products;

        this.products.forEach((a:any)=>{
          Object.assign(a, {quantity:1,total:a.price})
        })
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getProductsBySearch(s: string): void {
    this.cuteproductService.getBySearch(s).subscribe(
      (response: Response) => {
        this.products = response.products;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


}
