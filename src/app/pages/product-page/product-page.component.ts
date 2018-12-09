import { Product } from './../../models/Product';
import { ProductService } from './../../services/product.service';
import { Component } from '@angular/core';


@Component({
  selector: 'product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {

  product: Product;
  color: string;
  quantity: number;
  size: string;

  price: number;

  constructor(private productService: ProductService) {
    this.product = this.productService.getProductData();
    this.price = this.product.price;
    this.quantity = 1;
   }

   chooseColor(color) {
     this.color = color;
     console.log(this.color);
   }

   setQuantity(quantity) {
     this.quantity = quantity;
     console.log(quantity);
     this.setPrice();
   }

   chooseSize(size) {
     this.size = size;
     console.log(size);
   }

   setPrice(){
     this.price = Math.floor(this.quantity * this.product.price);
   }


}
