import { Product } from './../../../models/Product';
import { Component, Input, Output, EventEmitter } from '@angular/core';
/*
This compo is responsible for sending its parent compo information about chosen color

Can be later used in search selection
*/
@Component({
  selector: 'color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent {

  @Input() product: Product;
  @Output() color = new EventEmitter<string>();
  
  constructor() { 
  }

  chooseColor(color: string) {
    this.color.emit(color);
  }
  
}
