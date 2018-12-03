import { Product } from './../../../models/Product';
import { ProductService } from './../../../services/product.service';
import { Component } from '@angular/core';


@Component({
  selector: 'product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {

  product: Object;

  constructor(private productService: ProductService) {
    this.onGet();
   }

   onGet(){
     this.product = this.productService.getProductData();

     
   }

}
