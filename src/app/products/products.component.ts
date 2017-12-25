import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from "./product.service";

@Component({
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = true;
    _listFilter: string;
    errorMessage: string;

    get ListFilter(): string {
        return this._listFilter;
    }

    set ListFilter(v: string) {
        this._listFilter = v;
        this.filteredProducts = this.ListFilter ? this.performFilter(this.ListFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    constructor(private _productService: ProductService) {

    }

    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe(products => { this.products = products, this.filteredProducts = products },
            errorMessage => this.errorMessage = <any>errorMessage);
    }

    performFilter(filterBy: string): IProduct[] {

        filterBy = filterBy.toLowerCase();

        return this.products.filter((product: IProduct) => product.productName.toLowerCase().indexOf(filterBy) !== -1);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}
