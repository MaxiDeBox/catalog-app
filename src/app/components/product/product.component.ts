import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../../models/products.interface";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: IProduct;
  details = false;

  constructor() { }

  ngOnInit(): void {
  }

  showDetail() {
    this.details = !this.details;
  }
}
