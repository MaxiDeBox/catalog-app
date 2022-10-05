import { Component } from '@angular/core';
import { IProduct } from "./models/products.interface";
import { products as data } from "./data/products"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Catalog-app';

  products: IProduct[] = data;
}
