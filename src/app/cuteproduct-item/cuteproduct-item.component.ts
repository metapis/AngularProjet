import { Component ,EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Cuteproduct } from '../modules/Cuteproduct';
import {Router} from "@angular/router";
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-cuteproduct-item',
  templateUrl: './cuteproduct-item.component.html',
  styleUrls: ['./cuteproduct-item.component.css'
  ]
})
export class CuteproductItemComponent implements OnInit {
  @Input() product! : Cuteproduct;
  clicked = false;
  addButton: boolean=false;
  quantity:number=0;
  @Output() item = new EventEmitter();
  ngOnInit(): void {
  }

  constructor(private router: Router, private cartservice: CartService) {
  }

  addToCart() {
    this.cartservice.addToCart(this.product);

  }
  clickProduct(productId: number) {
    this.router.navigate([`details/${productId}`]);
  }

}
