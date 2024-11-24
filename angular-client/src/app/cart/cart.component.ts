import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
import { SingleProductComponent } from '../single-product/single-product.component';
import { Product, ProductCart } from '../products-page/products-page.component';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cart',
    standalone: true,
    imports: [CommonModule, SingleProductComponent, MatButtonModule],
    templateUrl: './cart.component.html',
    providers: [Router],
    styleUrl: './cart.component.css'
})
export class CartComponent {

    constructor(public cartService: CartService, private router: Router) {

    }

    deleteProductFromCart(p: Product) {
        this.cartService.deleteProductFromCart(p)
    }

    navigateToCheckout() {
        this.router.navigate(['checkout'])
    }
}
