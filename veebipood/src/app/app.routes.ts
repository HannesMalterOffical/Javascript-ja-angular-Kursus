import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { MaintainProductsComponent } from './admin/maintain-products/maintain-products.component';
import { GiftCardsComponent } from './gift-cards/gift-cards.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "cart", component: CartComponent},
    {path: "add-product", component: AddProductComponent},
    {path: "maintain-products", component: MaintainProductsComponent},
    {path: "gift-cards", component: GiftCardsComponent},
];
