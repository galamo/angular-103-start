import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
import { SingleProductComponent } from '../single-product/single-product.component';
import { Product, ProductCart } from '../products-page/products-page.component';

@Component({
    selector: 'app-cart',
    standalone: true,
    imports: [CommonModule, SingleProductComponent],
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.css'
})
export class CartComponent {

    constructor(public cartService: CartService) {

    }

    deleteProductFromCart(p: Product) {
        this.cartService.deleteProductFromCart(p)
    }
}
