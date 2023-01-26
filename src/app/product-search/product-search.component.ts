
import { Component , OnInit} from '@angular/core';
import { CutenessCategoryService } from '../Services/cuteness-category.service';
import {HttpErrorResponse} from "@angular/common/http";
import { Router } from '@angular/router';
import { CuteProductService } from '../Services/cute-product.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {
  searchvalue: string | undefined;

  constructor(private productService: CuteProductService, private route: Router){

  }

  ngOnInit(): void {

  }


    onClickCategory(category: string) {
      this.route.navigate([`categoryproducts/${category}`])
    }
}
