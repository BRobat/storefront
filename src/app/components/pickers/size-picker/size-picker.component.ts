import { Product } from './../../../models/Product';
import { Component, Input, Output, EventEmitter } from '@angular/core';

/*
This compo is responsible for sending information to its parent compo about chosen size

can be later used in search
*/

@Component({
  selector: 'size-picker',
  templateUrl: './size-picker.component.html',
  styleUrls: ['./size-picker.component.css']
})
export class SizePickerComponent {

  @Input() product: Product;
  @Output() size = new EventEmitter<string>();

  constructor() { }

  chooseSize(size: string) {
    this.size.emit(size);
  }

}
