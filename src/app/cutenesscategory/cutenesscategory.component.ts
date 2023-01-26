import { Component , OnInit} from '@angular/core';
import { CutenessCategoryService } from '../Services/cuteness-category.service';
import {HttpErrorResponse} from "@angular/common/http";
import { Router } from '@angular/router';


@Component({
  selector: 'app-cutenesscategory',
  templateUrl: './cutenesscategory.component.html',
  styleUrls: ['./cutenesscategory.component.css']
})
export class CutenesscategoryComponent implements OnInit {

  categories : string[] | undefined;

  constructor(private cutenesscategoryservice: CutenessCategoryService, private route: Router){

    this.categories=this.categories;
  }
  ngOnInit(): void {
    this.getCategories();
  }
  public getCategories(): void {
    this.cutenesscategoryservice.getCategories().subscribe(
      (categories: string[]) => {
        this.categories = categories;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );}


    onClickCategory(category: string) {
      this.route.navigate([`categoryproducts/${category}`])
    }}

