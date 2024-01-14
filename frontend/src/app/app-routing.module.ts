import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutUsComponent } from "./feature/about-us/about-us.component";
import { RegisterComponent } from "./feature/register/register.component";
import { LoginComponent } from "./feature/login/login.component";
import { ProductListComponent } from "./feature/product-list/product-list.component";

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