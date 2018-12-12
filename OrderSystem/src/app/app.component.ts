import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Product } from './Product';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Restaurant Extravaganza';
  product: Product = new Product();
  whichFood = 11;
  productIdReturn: number = null;
  constructor(private http: HttpClient) {}

  addNewProduct(price: number, description: string): void {
      this.http.post<number>('http://localhost:8080/products/new',
      {price: price, description: description})
        .subscribe(data => {
          this.productIdReturn = data;
        }
      );
    }
}
