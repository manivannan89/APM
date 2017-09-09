import { Injectable } from '@angular/core';
import { IProduct } from "./product";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  private _productUrl = './assets/api/products/products.json';
  constructor(private _http: Http) { }

  getProducts(): Observable<IProduct[]> {
    return this._http.get(this._productUrl)
      .map((response: Response) => <IProduct>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getProductByID(productId: number): Observable<IProduct> {
    return this.getProducts()
      .map((products: IProduct[]) => products.find(product => product.productId === productId));
  }

  private handleError(err: Response) {
    console.log(err);
    return Observable.throw(err.json().err || 'Server Error');
  }
}
