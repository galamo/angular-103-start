import { Component } from '@angular/core';
import data from "./data.json"
import { CommonModule } from '@angular/common';
import { SingleProductComponent } from "../single-product/single-product.component";
export type Product = typeof data[0]

@Component({
    selector: 'app-products-page',
    standalone: true,
    imports: [CommonModule, SingleProductComponent],
    templateUrl: './products-page.component.html',
    styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {

    public productsList: Array<Product> = data;

    constructor() {
    }

}
