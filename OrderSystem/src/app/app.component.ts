import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Restaurant Extravaganza';
  whichFood = 11;
  quantity1 = 0;
  quantity2 = 0;
  quantity3 = 0;
  quantity4 = 0;
  quantity5 = 0;
  quantity6 = 0;
  quantity7 = 0;
  quantity8 = 0;
  quantity9 = 0;
  quantity10 = 0;
  price1 = 4.00;
  price2 = 6.00;
  price3 = 3.50;
  price4 = 2.50;
  price5 = 3.00;
  price6 = 6.66;
  price7 = 2.50;
  price8 = 1.50;
  price9 = 10.00;
  price10 = 2.00;
  totalPrice1 = 0.00;
  totalPrice2 = 0.00;
  totalPrice3 = 0.00;
  totalPrice4 = 0.00;
  totalPrice5 = 0.00;
  totalPrice6 = 0.00;
  totalPrice7 = 0.00;
  totalPrice8 = 0.00;
  totalPrice9 = 0.00;
  totalPrice10 = 0.00;
  sum = 0.00;
  sumString = '$0.00';
  tax = 0.00;
  taxString = '$0.00';
  orderPrice = '$0.00';
  formSubmitMessage1: String = '0 x Okay Chicken Tenders: $0.00';
  formSubmitMessage2: String = '0 x Slightly Dry Burger: $0.00';
  formSubmitMessage3: String = '0 x E.Coli-Free Salad: $0.00';
  formSubmitMessage4: String = '0 x Slightly Soggy Fries: $0.00';
  formSubmitMessage5: String = '0 x Mac n… More Mac: $0.00';
  formSubmitMessage6: String = '0 x Food Item 6: $0.00';
  formSubmitMessage7: String = '0 x Grilled Cheese: $0.00';
  formSubmitMessage8: String = '0 x Recycled and Reused Grilled Crusts: $0.00';
  formSubmitMessage9: String = '0 x Really Greasy Pizza: $0.00';
  formSubmitMessage10: String = '0 x Room Temp Water: $0.00';
  submitOrderMessage: String = '';
  public updateTotalPrice() {
    this.sum = this.totalPrice1 + this.totalPrice2 + this.totalPrice3 + this.totalPrice4 + this.totalPrice5
    + this.totalPrice6 + this.totalPrice7 + this.totalPrice8 + this.totalPrice9 + this.totalPrice10;
    this.sumString = '$' + this.sum.toFixed(2);
    this.tax = this.sum * 0.07;
    this.taxString = '$' + this.tax.toFixed(2);
    this.orderPrice = '$' + (this.sum + this.tax).toFixed(2);
  }
  public formSubmitted1(quantity: number) {
    if (quantity >= 0) {
    this.quantity1 = quantity;
    this.totalPrice1 = this.quantity1 * this.price1;
    this.formSubmitMessage1 = this.quantity1 + ' x Okay Chicken Tenders: $' + this.totalPrice1.toFixed(2);
   } else {
     this.formSubmitMessage1 = '0 x Okay Chicken Tenders: $0.00';
   }
   this.updateTotalPrice();
  }

  public formSubmitted2(quantity: number) {
    if (quantity >= 0) {
    this.quantity2 = quantity;
    this.totalPrice2 = this.quantity2 * this.price2;
    this.formSubmitMessage2 = this.quantity2 + ' x Slightly Dry Burger: $' + this.totalPrice2.toFixed(2);
   } else {
    this.formSubmitMessage2 = '0 x Slightly Dry Burger: $0.00';
   }
   this.updateTotalPrice();
  }

  public formSubmitted3(quantity: number) {
    if (quantity >= 0) {
    this.quantity3 = quantity;
    this.totalPrice3 = this.quantity3 * this.price3;
    this.formSubmitMessage3 = this.quantity3 + ' x E.Coli-Free Salad: $' + this.totalPrice3.toFixed(2);
   } else {
    this.formSubmitMessage3 = '0 x E.Coli-Free Salad: $0.00';
   }
   this.updateTotalPrice();
  }
  public formSubmitted4(quantity: number) {
    if (quantity >= 0) {
    this.quantity4 = quantity;
    this.totalPrice4 = this.quantity4 * this.price4;
    this.formSubmitMessage4 = this.quantity4 + ' x Slightly Soggy Fries: $' + this.totalPrice4.toFixed(2);
   } else {
    this.formSubmitMessage4 = '0 x Slightly Soggy Fries: $0.00';
   }
   this.updateTotalPrice();
  }
  public formSubmitted5(quantity: number) {
    if (quantity >= 0) {
    this.quantity5 = quantity;
    this.totalPrice5 = this.quantity5 * this.price5;
    this.formSubmitMessage5 = this.quantity5 + ' x Mac n... More Mac: $' + this.totalPrice5.toFixed(2);
   } else {
    this.formSubmitMessage5 = '0 x Mac n... More Mac: $0.00';
   }
   this.updateTotalPrice();
  }
  public formSubmitted6(quantity: number) {
    if (quantity >= 0) {
    this.quantity6 = quantity;
    this.totalPrice6 = this.quantity6 * this.price6;
    this.formSubmitMessage6 = this.quantity6 + ' x Food Item 6: $' + this.totalPrice6.toFixed(2);
   } else {
    this.formSubmitMessage6 = '0 x Food Item 6: $0.00';
   }
   this.updateTotalPrice();
  }
  public formSubmitted7(quantity: number) {
    if (quantity >= 0) {
    this.quantity7 = quantity;
    this.totalPrice7 = this.quantity7 * this.price7;
    this.formSubmitMessage7 = this.quantity7 + ' x Grilled Cheese: $' + this.totalPrice7.toFixed(2);
   } else {
    this.formSubmitMessage7 = '0 x Grilled Cheese: $0.00';
   }
   this.updateTotalPrice();
  }
  public formSubmitted8(quantity: number) {
    if (quantity >= 0) {
    this.quantity8 = quantity;
    this.totalPrice8 = this.quantity8 * this.price8;
    this.formSubmitMessage8 = this.quantity8 + ' x Recycled and Reused Grilled Crusts: $' + this.totalPrice8.toFixed(2);
   } else {
    this.formSubmitMessage8 = '0 x Recycled and Reused Grilled Crusts: $0.00';
   }
   this.updateTotalPrice();
  }
  public formSubmitted9(quantity: number) {
    if (quantity >= 0) {
    this.quantity9 = quantity;
    this.totalPrice9 = this.quantity9 * this.price9;
    this.formSubmitMessage9 = this.quantity9 + ' x Really Greasy Pizza: $' + this.totalPrice9.toFixed(2);
   } else {
    this.formSubmitMessage9 = '0 x Really Greasy Pizza: $0.00';
   }
   this.updateTotalPrice();
  }
  public formSubmitted10(quantity: number) {
    if (quantity >= 0) {
    this.quantity10 = quantity;
    this.totalPrice10 = this.quantity10 * this.price10;
    this.formSubmitMessage10 = this.quantity10 + ' x Room Temp Water: $' + this.totalPrice10.toFixed(2);
   } else {
    this.formSubmitMessage10 = '0 x Room Temp Water: $0.00';
   }
   this.updateTotalPrice();
  }

  public submit() {
    this.submitOrderMessage = 'Thanks for ordering! Press New Order to start a new order.';
  }

  public refresh() {
    this.whichFood = 11;
    this.totalPrice1 = 0.00;
    this.totalPrice2 = 0.00;
    this.totalPrice3 = 0.00;
    this.totalPrice4 = 0.00;
    this.totalPrice5 = 0.00;
    this.totalPrice6 = 0.00;
    this.totalPrice7 = 0.00;
    this.totalPrice8 = 0.00;
    this.totalPrice9 = 0.00;
    this.totalPrice10 = 0.00;
    this.sum = 0.00;
    this.sumString = '$0.00';
    this.tax = 0.00;
    this.taxString = '$0.00';
    this.orderPrice = '$0.00';
    this.quantity1 = 0;
    this.quantity2 = 0;
    this.quantity3 = 0;
    this.quantity4 = 0;
    this.quantity5 = 0;
    this.quantity6 = 0;
    this.quantity7 = 0;
    this.quantity8 = 0;
    this.quantity9 = 0;
    this.quantity10 = 0;
    this.updateTotalPrice();
    this.formSubmitMessage1 = '0 x Okay Chicken Tenders: $0.00';
    this.formSubmitMessage2 = '0 x Slightly Dry Burger: $0.00';
    this.formSubmitMessage3 = '0 x E.Coli-Free Salad: $0.00';
    this.formSubmitMessage4 = '0 x Slightly Soggy Fries: $0.00';
    this.formSubmitMessage5 = '0 x Mac n… More Mac: $0.00';
    this.formSubmitMessage6 = '0 x Food Item 6: $0.00';
    this.formSubmitMessage7 = '0 x Grilled Cheese: $0.00';
    this.formSubmitMessage8 = '0 x Recycled and Reused Grilled Crusts: $0.00';
    this.formSubmitMessage9 = '0 x Really Greasy Pizza: $0.00';
    this.formSubmitMessage10 = '0 x Room Temp Water: $0.00';
    this.submitOrderMessage = '';
  }
}
