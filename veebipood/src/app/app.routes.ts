import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { MaintainProductsComponent } from './admin/maintain-products/maintain-products.component';
import { GiftCardsComponent } from './gift-cards/gift-cards.component';
import { TootajadComponent } from './tootajad/tootajad.component';
import { EsindusedComponent } from './esindused/esindused.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { LisaToodeComponent } from './admin/lisa-toode/lisa-toode.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "cart", component: CartComponent},
    {path: "admin", component: AdminHomeComponent},
    {path: "add-product", component: AddProductComponent},
    {path: "lisa-toode", component: LisaToodeComponent},
    {path: "maintain-products", component: MaintainProductsComponent},
    {path: "gift-cards", component: GiftCardsComponent},
    {path: "tootajad", component: TootajadComponent },
    {path: "esindused", component: EsindusedComponent },
    {path: "signup", component: SignupComponent},
    {path: "login", component: LoginComponent },
    {path: "contact", component: ContactUsComponent },
    {path: "**", component: NotFoundComponent}
    

];
