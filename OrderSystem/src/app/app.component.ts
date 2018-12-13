import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Restaurant Extravaganza';
  whichFood = 11;
  quantity1: number;
  quantity2: number;
  quantity3: number;
  quantity4: number;
  quantity5: number;
  quantity6: number;
  quantity7: number;
  quantity8: number;
  quantity9: number;
  quantity10: number;
  formSubmitMessage1: String;
  formSubmitMessage2: String;
  formSubmitMessage3: String;
  formSubmitMessage4: String;
  formSubmitMessage5: String;
  formSubmitMessage6: String;
  formSubmitMessage7: String;
  formSubmitMessage8: String;
  formSubmitMessage9: String;
  formSubmitMessage10: String;
  public formSubmitted1(quantity: number) {
    if (quantity > 0) {
    this.quantity1 = quantity;
    this.formSubmitMessage1 = this.quantity1 + ' x Okay Chicken Tenders';
   } else {
     this.formSubmitMessage1 = '0 x Okay Chicken Tenders';
   }
  }
  public formSubmitted2(quantity: number) {
    if (quantity > 0) {
    this.quantity2 = quantity;
    this.formSubmitMessage2 = this.quantity2 + ' x Slightly Dry Burger';
   } else {
     this.formSubmitMessage2 = '0 x Slightly Dry Burger';
   }
  }
  public formSubmitted3(quantity: number) {
    if (quantity > 0) {
    this.quantity3 = quantity;
    this.formSubmitMessage3 = this.quantity3 + ' x E.Coli-Free Salad';
   } else {
     this.formSubmitMessage3 = '0 x E.Coli-Free Salad';
   }
  }
  public formSubmitted4(quantity: number) {
    if (quantity > 0) {
    this.quantity4 = quantity;
    this.formSubmitMessage4 = this.quantity4 + ' x Slightly Soggy Fries';
   } else {
     this.formSubmitMessage4 = '0 x Slightly Soggy Fries';
   }
  }
  public formSubmitted5(quantity: number) {
    if (quantity > 0) {
    this.quantity5 = quantity;
    this.formSubmitMessage5 = this.quantity5 + ' x Mac n… More Mac';
   } else {
     this.formSubmitMessage5 = '0 x Mac n… More Mac';
   }
  }
  public formSubmitted6(quantity: number) {
    if (quantity > 0) {
    this.quantity6 = quantity;
    this.formSubmitMessage6 = this.quantity6 + ' x Food Item 6';
   } else {
     this.formSubmitMessage6 = '0 x Food Item 6';
   }
  }
  public formSubmitted7(quantity: number) {
    if (quantity > 0) {
    this.quantity7 = quantity;
    this.formSubmitMessage7 = this.quantity7 + ' x Grilled Cheese';
   } else {
     this.formSubmitMessage7 = '0 x Grilled Cheese';
   }
  }
  public formSubmitted8(quantity: number) {
    if (quantity > 0) {
    this.quantity8 = quantity;
    this.formSubmitMessage8 = this.quantity8 + ' x Recycled and Reused Grilled Crusts';
   } else {
     this.formSubmitMessage8 = '0 x Recycled and Reused Grilled Crusts';
   }
  }
  public formSubmitted9(quantity: number) {
    if (quantity > 0) {
    this.quantity9 = quantity;
    this.formSubmitMessage9 = this.quantity9 + ' x Really Greasy Pizza';
   } else {
     this.formSubmitMessage9 = '0 x Really Greasy Pizza';
   }
  }
  public formSubmitted10(quantity: number) {
    if (quantity > 0) {
    this.quantity10 = quantity;
    this.formSubmitMessage10 = this.quantity10 + ' x Room Temp Water';
   } else {
     this.formSubmitMessage10 = '0 x Room Temp Water';
   }
  }
}
