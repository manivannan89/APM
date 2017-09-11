import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from "./product.service";

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Name';
  product: IProduct;
  errorMessage: string;

  constructor(private _route: ActivatedRoute, private _router: Router, private _productService: ProductService) { }

  ngOnInit():void {

    let id = +this._route.snapshot.paramMap.get('id');    

    this._productService.getProductByID(id)
    .subscribe(product => this.product = product, errorMessage => this.errorMessage = errorMessage);

  }

  onBack(): void {
    this._router.navigate(['/products']);
  }

}
