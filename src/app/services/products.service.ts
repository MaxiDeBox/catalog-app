import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {IProduct} from "../models/products.interface";
import {catchError, delay, tap} from "rxjs/operators";
import {ErrorService} from "./error.service";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(
    private _http: HttpClient,
    private _errorSrv: ErrorService
  ) { }

  getAll(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>('https://fakestoreapi.com/products', {
      params: new HttpParams({
        fromObject: {limit: 5}
      })
    }).pipe(
      // delay(2000), // Искуственная задержка
      catchError(this._errorHandler.bind(this))
    )
  }

  create(product: IProduct): Observable<IProduct> {
    return this._http.post<IProduct>('https://fakestoreapi.com/products', product);
  }

  private _errorHandler(error: HttpErrorResponse) {
    this._errorSrv.handle(error.message);

    return throwError(() => error.message);
  }
}
