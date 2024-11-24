import { Component, OnInit } from '@angular/core';
import data from "./data.json"
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';


import { CommonModule } from '@angular/common';
import { SingleProductComponent } from "../single-product/single-product.component";
import { CartService } from "../services/cart.service"
export type Product = typeof data[0]

export type ProductCart = Product & { quantity: number }

@Component({
    selector: 'app-products-page',
    standalone: true,
    imports: [CommonModule, SingleProductComponent, MatSlideToggleModule, MatButtonModule],
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

    getProductsData(){
        // complete this part if you want!?
    }




}


