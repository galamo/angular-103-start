import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
    selector: 'app-checkout',
    standalone: true,
    imports: [CommonModule],
    providers: [Location],
    templateUrl: './checkout.component.html',
    styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
    public availableDates = [new Date('2025-04-09T18:56:01.794Z'),
    new Date('2024-11-30T18:56:01.794Z'),
    new Date('2024-12-01T18:56:01.794Z')

    ]
    constructor(public cartService: CartService, public location: Location) {
    }

    selectDate() {
        this.cartService.clearCart()
    }
    goBack() {
        this.location.back()
    }
}
