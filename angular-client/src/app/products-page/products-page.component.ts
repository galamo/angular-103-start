import { Component } from '@angular/core';
import data from "./data.json"
import { CommonModule } from '@angular/common';
import { SingleProductComponent } from "../single-product/single-product.component";
export type Product = typeof data[0]

type ProductCart = Product & { quantity: number }

@Component({
    selector: 'app-products-page',
    standalone: true,
    imports: [CommonModule, SingleProductComponent],
    templateUrl: './products-page.component.html',
    styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {

    public productsList: Array<Product> = data;
    public shoppingCart: Array<ProductCart>;
    public totalCartPrice: number;
    constructor() {
        this.shoppingCart = []
        this.totalCartPrice = 0;
    }

    addToCartProductsPage(product: Product) {
        const foundProduct = this.shoppingCart.find(p => p.id === product.id)
        if (foundProduct) {
            foundProduct.quantity = foundProduct.quantity + 1;
        } else {
            this.shoppingCart.push({ ...product, quantity: 1 })
        }

        this.totalCartPrice = getTotalPrice(this.shoppingCart)
    }

}

function getTotalPrice(shoppingCart: Array<ProductCart>) {
    return shoppingCart.reduce((totalPrice, currentProduct: ProductCart) => {
        totalPrice = totalPrice + (currentProduct.price * currentProduct.quantity)
        return totalPrice
    }, 0)
}
