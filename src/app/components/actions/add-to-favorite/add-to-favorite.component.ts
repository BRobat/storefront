import { AlertService } from './../../../services/alert.service';
import { FavoritesService } from './../../../services/favorites.service';
import { Product } from './../../../models/Product';
import { Input } from '@angular/core';
/*
  this component is responsible for adding product to users favorites products 
*/

import { Component } from '@angular/core';

@Component({
  selector: 'add-to-favorite',
  templateUrl: './add-to-favorite.component.html',
  styleUrls: ['./add-to-favorite.component.css']
})
export class AddToFavoriteComponent {

  isFavorite: boolean;
  @Input() product: Product;

  constructor(private favoritesService: FavoritesService, private alertService: AlertService) {
    //actually it should ask server if product is favorite
    this.isFavorite = false;
   }

  addToFavorites(product) {
    if(this.isFavorite) {
      this.favoritesService.removeFromFavorites(product);
      this.alertService.success("removed from favorites.");
    } else {
      this.favoritesService.addToFavorites(product);
      this.alertService.success("added to favorites");
    }
  }
}
