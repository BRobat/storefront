import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompareService {

  constructor() { }

  addToCompares(product){
    console.log("added");
    //adds stuff to server or local storage
  }

  removeFromCompares(product) {
    console.log("removed");
    //removes stuff from compare
  }
}
