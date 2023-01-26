import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { CuteProductService } from '../Services/cute-product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) {}

  redirectToCategory() {
    this.router.navigate(['category']);
  }
   redirectToHome(){
    this.router.navigate(['']);
   }
  redirectToCart(){
    this.router.navigate(['cart'])
  }
  redirectToSigngup(){
    this.router.navigate(['signin'])
  }

}
