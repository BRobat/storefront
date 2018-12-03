import { CartService } from './services/cart.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { ProductPageComponent } from './components/pages/product-page/product-page.component';
import { SizeGuidePageComponent } from './components/pages/size-guide-page/size-guide-page.component';
import { ColorPickerComponent } from './components/pickers/color-picker/color-picker.component';
import { SizePickerComponent } from './components/pickers/size-picker/size-picker.component';
import { QuantityPickerComponent } from './components/pickers/quantity-picker/quantity-picker.component';
import { AddToCartComponent } from './components/actions/add-to-cart/add-to-cart.component';
import { AddToFavoriteComponent } from './components/actions/add-to-favorite/add-to-favorite.component';
import { AddToCompareComponent } from './components/actions/add-to-compare/add-to-compare.component';
import { CollectionViewComponent } from './components/views/collection-view/collection-view.component';
import { PhotoGalleryComponent } from './components/views/photo-gallery/photo-gallery.component';
import { AddReviewComponent } from './components/forms/add-review/add-review.component';
import { ReviewCollectionComponent } from './components/views/review-collection/review-collection.component';
import { BannerComponent } from './components/views/banner/banner.component';
import { AlertComponent } from './components/notifications/alert/alert.component';

const routes: Routes = [
  {path: "", component: ProductPageComponent},
  {path: "size-guide-page", component: SizeGuidePageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    SizeGuidePageComponent,
    ColorPickerComponent,
    SizePickerComponent,
    QuantityPickerComponent,
    AddToCartComponent,
    AddToFavoriteComponent,
    AddToCompareComponent,
    CollectionViewComponent,
    PhotoGalleryComponent,
    AddReviewComponent,
    ReviewCollectionComponent,
    BannerComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
