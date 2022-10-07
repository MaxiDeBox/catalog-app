import {Component, OnInit} from '@angular/core';
import { IProduct } from "./models/products.interface";
import { products as data } from "./data/products"
import {ProductsService} from "./services/products.service";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {ModalService} from "./services/modal.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'catalog-app';

  products$: Observable<IProduct[]>;
  loading = false;
  term=''

  constructor(
    public modalSrv: ModalService,
    private _productsSrv: ProductsService
  ) {}

  ngOnInit() {
    this.loading = true;
    this.products$ = this._productsSrv.getAll()
      .pipe(tap(() => this.loading = false));
  }
}
