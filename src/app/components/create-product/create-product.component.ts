import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../../services/products.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
  form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  get title() {
    return this.form.controls.title as FormControl;
  }

  constructor(
    private _productSrv: ProductsService,
    private _modalSrv: ModalService
  ) { }

  onCreate() {
    this._productSrv.create({
      title: this.form.value.title as string,
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
      rating: {
        rate: 42,
        count: 1
      }
    }).subscribe(() => this._modalSrv.close());
  }
}
