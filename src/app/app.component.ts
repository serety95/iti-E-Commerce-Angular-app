import { Component, Output } from '@angular/core';
import { Product } from './_model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  productsArray:Product[]=[];

  addToCartAtHeader(product:Product){
    console.log(product);
    this.productsArray.push(product);
  }
}
