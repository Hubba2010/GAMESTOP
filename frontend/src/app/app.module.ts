import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModule } from './feature/cart/cart.module';
import { LoginModule } from './feature/login/login.module';
import { ProductListModule } from './feature/product/product-list/product-list.module';
import { SelectedProductModule } from './feature/product/selected-product/selected-product.module';
import { RegisterModule } from './feature/register/register.module';
import { FooterModule } from './footer/footer.module';
import { MainMenuModule } from './main-menu/main-menu.module';
import { SubNavModule } from './sub-nav/sub-nav.module';
import { ProductListSearchModule } from './feature/product/product-list-search/product-list-search.module';
import { OrderHistoryModule } from './feature/order-history/order-history.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MainMenuModule,
    SubNavModule,
    LoginModule,
    RegisterModule,
    FooterModule,
    ProductListModule,
    ProductListSearchModule,
    SelectedProductModule,
    CartModule,
    OrderHistoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
