import { Injectable } from '@angular/core';
import { Product } from './../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  //this is only for mockup purposes
  getProductData(){
    let product = new Product();
    product.name = "super tshirt";
    product.price = 23.1;
    product.sizes = ["XL", "L", "M", "XS"];
    product.details = "this new product is super";
    product.colors = ["blue", "black", "yellow"];
    product.tag = "this is a tag";
    return product;
  }
}
