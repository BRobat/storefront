import { Product } from './../../../models/Product';
import { AlertService } from './../../../services/alert.service';
import { CompareService } from './../../../services/compare.service';
/*
This component is responsible for adding product to "compare" component.
*/

import { Component, Input } from '@angular/core';

@Component({
  selector: 'add-to-compare',
  templateUrl: './add-to-compare.component.html',
  styleUrls: ['./add-to-compare.component.css']
})
export class AddToCompareComponent{

  isCompared: boolean;
  @Input() product: Product;
  

  constructor(private compareService: CompareService, private alertService: AlertService) {
    //ask server if product is compared or no
    this.isCompared = false;
   }

  addToCompare(product){
    if (this.isCompared) {
      this.compareService.removeFromCompare(product);
      this.alertService.success("Product removed from compare"); //or any other message set in language service
    } else {
      this.compareService.addToCompare(product);
      this.alertService.success("Product added to compare");
    }

    
  }

}
