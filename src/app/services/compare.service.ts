import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompareService {

  constructor() { }

  addToCompare(product){
    console.log("added");
    //adds stuff to server or local storage
  }

  removeFromCompare(product) {
    console.log("removed");
    //removes stuff from compare
  }
}
