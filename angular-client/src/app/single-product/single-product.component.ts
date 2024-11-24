import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Product, ProductCart } from '../products-page/products-page.component';
import { RatingComponent } from "../rating/rating.component";
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@Component({
    selector: 'app-single-product',
    standalone: true,
    imports: [RatingComponent, CommonModule, MatButtonModule, MatSlideToggleModule],
    templateUrl: './single-product.component.html',
    styleUrl: './single-product.component.css'
})
export class SingleProductComponent {
    @Input() productObj: Product
    @Input() operation: string
    @Output() sendProduct = new EventEmitter<Product>();
    public sale: { price: number, show: boolean } = { price: 0, show: false }
    public buttonOperation: string = "";
    constructor() {
        this.operation = ""
        this.productObj = {
            id: 0,
            title: "",
            price: 0,
            description: "",
            category: "",
            image: "",
            rating: {
                rate: 0,
                count: 0,
            }
        }
    }

    getSalePrice() {
        this.sale.price = this.productObj.price - 2
        this.sale.show = true;
    }
    addToCartSingleProduct() {
        this.sendProduct.emit(this.productObj)
    }
    deleteProductFromCart() {
        this.sendProduct.emit(this.productObj)
    }
    getParseInt(value: string): number {
        return parseInt(value)
    }

    // ngOnInit(): void {
    //     if (this.operation === 'add') {
    //         this.buttonOperation = "__Add To Cart__"
    //     } else if (this.operation === 'remove') {
    //         this.buttonOperation = "__Remove From Cart__"
    //     } else {
    //         this.buttonOperation = "DONT KNOW"
    //     }
    // }
}

