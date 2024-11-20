import { Injectable } from '@angular/core';
import { ProductCart } from '../products-page/products-page.component';


@Injectable({
    providedIn: 'root'
})
export class CartService {

    public shoppingCart: Array<ProductCart> = [];
    public totalPrice: number = 0
    constructor() { }

    getShoppingCart() {
        return this.shoppingCart
    }

    addNewItemToShoppingCart(product: ProductCart) {
        const foundProduct = this.shoppingCart.find(p => p.id === product.id)
        if (foundProduct) {
            foundProduct.quantity = foundProduct.quantity + 1;
        } else {
            this.shoppingCart.push({ ...product, quantity: 1 })
        }

        this.totalPrice = getTotalPrice(this.shoppingCart)

    }

    getTotalPrice() {
        return this.totalPrice
    }
    setTotalPrice(totalPrice: number) {
        this.totalPrice = totalPrice
    }
}

function getTotalPrice(shoppingCart: Array<ProductCart>) {
    return shoppingCart.reduce((totalPrice, currentProduct: ProductCart) => {
        totalPrice = totalPrice + (currentProduct.price * currentProduct.quantity)
        return totalPrice
    }, 0)
}