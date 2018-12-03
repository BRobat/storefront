import { Product } from './../../../models/Product';
import { CartService } from './../../../services/cart.service';
import { Component, Input } from '@angular/core';
/*
This component is responsible for sending to the server quantity and type of the product selected in the product-page.
*/
@Component({
  selector: 'add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css'],
  providers: [CartService]
})
export class AddToCartComponent {

  @Input() product: Product;


  constructor(private cartService: CartService) {

   }

   addToCart(product){
    this.cartService.addToCarts(product);
   }

}