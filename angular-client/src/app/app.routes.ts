import { Routes } from '@angular/router';
import { ProductsPageComponent } from './products-page/products-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';

export const routes: Routes = [
    { path: "products-page", component: ProductsPageComponent },
    { path: "home", component: HomeComponent },
    { path: "cart", component: CartComponent },
    { path: "checkout", component: CheckoutComponent },
    { path: "**", component: NotFoundComponent }

];
