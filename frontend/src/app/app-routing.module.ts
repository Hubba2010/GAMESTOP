import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutUsComponent } from "./feature/about-us/about-us.component";
import { RegisterComponent } from "./feature/register/register.component";
import { LoginComponent } from "./feature/login/login.component";
import { ProductListComponent } from "./feature/product/product-list/product-list.component";
import { SelectedProductComponent } from "./feature/product/selected-product/selected-product.component";
import { CartComponent } from "./feature/cart/cart.component";
import { ProductListSearchComponent } from "./feature/product/product-list-search/product-list-search.component";
import { OrderHistoryComponent } from "./feature/order-history/order-history.component";

export const mainRoutes: Routes = [
    {
        path: '',
        component: AboutUsComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
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
    },
    {
        path: 'order-history',
        component: OrderHistoryComponent
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