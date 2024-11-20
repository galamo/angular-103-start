import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products-page/products-page.component';
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
    @Output() addToCart = new EventEmitter<Product>();
    public sale: { price: number, show: boolean } = { price: 0, show: false }

    constructor() {
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
        this.addToCart.emit(this.productObj)
    }
    getParseInt(value: string): number {
        return parseInt(value)
    }
}

