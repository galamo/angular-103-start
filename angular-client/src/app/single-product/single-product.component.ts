import { Component, Input } from '@angular/core';
import { Product } from '../products-page/products-page.component';
import { RatingComponent } from "../rating/rating.component";

@Component({
    selector: 'app-single-product',
    standalone: true,
    imports: [RatingComponent],
    templateUrl: './single-product.component.html',
    styleUrl: './single-product.component.css'
})
export class SingleProductComponent {
    @Input() productObj: Product
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

    getParseInt(value: string): number {
        return parseInt(value)
    }
}

