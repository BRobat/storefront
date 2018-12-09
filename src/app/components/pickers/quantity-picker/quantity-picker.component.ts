import { Component, Output, EventEmitter } from '@angular/core';

/*

*/
@Component({
  selector: 'quantity-picker',
  templateUrl: './quantity-picker.component.html',
  styleUrls: ['./quantity-picker.component.css']
})
export class QuantityPickerComponent {

  @Output() quantity = new EventEmitter<number>();

  xd = "";

  constructor() { }

  setQuantity(quantity: any) {
    this.quantity.emit(quantity);
  }

  onKey(event) {
    this.xd = event.target.value;
    this.setQuantity(this.xd);
  }
}
