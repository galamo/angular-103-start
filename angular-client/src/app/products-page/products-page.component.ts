import { Component } from '@angular/core';
import data from "./data.json"
import { CommonModule } from '@angular/common';
import { SingleProductComponent } from "../single-product/single-product.component";
import { CartService } from "../services/cart.service"
export type Product = typeof data[0]

export type ProductCart = Product & { quantity: number }

@Component({
    selector: 'app-products-page',
    standalone: true,
    imports: [CommonModule, SingleProductComponent],
    templateUrl: './products-page.component.html',
    styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {

    public productsList: Array<Product> = data;
    constructor(private cartService: CartService) {
    }
    addToCartProductsPage(product: Product) {
        this.cartService.addNewItemToShoppingCart({ ...product, quantity: 1 })

    }

}


