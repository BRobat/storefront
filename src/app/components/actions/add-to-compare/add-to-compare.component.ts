import { AlertService } from './../../../services/alert.service';
import { CompareService } from './../../../services/compare.service';
/*
This component is responsible for adding product to "compare" component.
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-to-compare',
  templateUrl: './add-to-compare.component.html',
  styleUrls: ['./add-to-compare.component.css']
})
export class AddToCompareComponent{

  isCompared: boolean;

  constructor(private compareService: CompareService, private alertService: AlertService) {
    this.isCompared = false;
   }

  addToCompare(product){
    if (this.isCompared) {
      this.compareService.removeFromCompares(product);
      this.alertService.success("Product removed from compare");
    } else {
      this.compareService.addToCompares(product);
      this.alertService.success("Product added to compare");
    }

    
  }

}
