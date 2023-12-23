import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutUsComponent } from "./feature/about-us/about-us.component";
import { LoginComponent } from "./feature/login/login.component";
import { RegisterComponent } from "./feature/register/register.component";

export const mainRoutes: Routes = [
    {
        path: '',
        component: AboutUsComponent
    },
    {
        path: 'login',
        component: LoginComponent,
        loadChildren: () => import('./feature/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'register',
        component: RegisterComponent,
        loadChildren: () => import('./feature/register/register.module').then(m => m.RegisterModule)
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