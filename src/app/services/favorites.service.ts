import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor() { }

  addToFavorites(product) {
    //adds stuff to server
  }

  removeFromFavorites(product) {
    //removes stuff from favorites
  }
}
