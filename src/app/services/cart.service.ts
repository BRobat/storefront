import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  

  constructor() { 
    console.log("cart service works")
   }

  addToCarts(product){
    console.log("added ", product.name, " cart")
    //puts stuff on the server
  }
}
