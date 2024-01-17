import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutUsComponent } from "./feature/about-us/about-us.component";
import { RegisterComponent } from "./feature/register/register.component";
import { LoginComponent } from "./feature/login/login.component";
import { ProductListComponent } from "./feature/product/product-list/product-list.component";
import { SelectedProductComponent } from "./feature/product/selected-product/selected-product.component";
import { CartComponent } from "./feature/cart/cart.component";
import { ProductListSearchComponent } from "./feature/product/product-list-search/product-list-search.component";
// import { NotLoggedInGuard } from "./feature/services/guard/not-logged-in.guard";

export const mainRoutes: Routes = [
    {
        path: '',
        component: AboutUsComponent
    },
    {
        path: 'login',
        // canActivate: [NotLoggedInGuard],
        component: LoginComponent
    },
    {
        path: 'register',
        // canActivate: [NotLoggedInGuard],
        component: RegisterComponent
    },
    {
        path: 'product-list',
        component: ProductListComponent
    },
    {
        path: 'product-list-search',
        component: ProductListSearchComponent
    },
    {
        path: 'product',
        component: SelectedProductComponent
    },
    {
        path: 'cart',
        component: CartComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            mainRoutes, {
                enableTracing: false,
                onSameUrlNavigation: 'reload',
                paramsInheritanceStrategy: 'always'
            }
        )
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
    constructor() {

    }
}