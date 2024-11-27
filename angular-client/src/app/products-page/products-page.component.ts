import { Component, OnInit } from '@angular/core';
import data from "./data.json"
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';


import { CommonModule } from '@angular/common';
import { SingleProductComponent } from "../single-product/single-product.component";
import { CartService } from "../services/cart.service"
import { ProductsService } from '../services/products.service';
import jsonToCsv from 'json-to-csv-export';
export type Product = typeof data[0]

export type ProductCart = Product & { quantity: number }

@Component({
    selector: 'app-products-page',
    standalone: true,
    imports: [CommonModule, SingleProductComponent, MatSlideToggleModule, MatButtonModule],
    templateUrl: './products-page.component.html',
    styleUrl: './products-page.component.css'
})
export class ProductsPageComponent implements OnInit {

    public isLoading: boolean = false;
    public productsList: Array<Product> = [];
    constructor(private cartService: CartService, private productsService: ProductsService) {
    }
    addToCartProductsPage(product: Product) {
        this.cartService.addNewItemToShoppingCart({ ...product, quantity: 1 })
    }

    async getProductsData() {
        try {
            this.isLoading = true;
            const { data } = await this.productsService.getProductsApi()
            this.productsList = data
        } catch (error) {
            alert("Something went wrong!!!")
        } finally {
            this.isLoading = false;
        }

        // complete this part if you want!?
    }

    downloadCSV() {
        jsonToCsv({
            data: this.productsList, filename: "download_products_list"
        })
    }

    ngOnInit(): void {
        this.getProductsData()
    }




}


