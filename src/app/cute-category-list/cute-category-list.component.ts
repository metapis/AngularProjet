import { Component, OnInit } from '@angular/core';
import { Cuteproduct } from '../modules/Cuteproduct';
import {CuteProductService} from "../Services/cute-product.service";
import {HttpErrorResponse} from "@angular/common/http";
import { Router } from '@angular/router';
import {Response} from "../modules/Response";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-cute-category-list',
  templateUrl: './cute-category-list.component.html',
  styleUrls: ['./cute-category-list.component.css']
})
export class CuteCategoryListComponent implements OnInit{
  products: Cuteproduct[];


  constructor(private productService : CuteProductService, private  route : ActivatedRoute) {
    this.products=new Array<Cuteproduct>();
  }

  ngOnInit(): void {
    const category : string = this.route.snapshot.params['category'];
    this.getProductsOfCategory(category);
  }

  public getProductsOfCategory(category : string): void {
    this.productService.getProductsOfCategory(category).subscribe(
      (response: Response) => {
        this.products = response.products;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


}
