import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './feature/login/login.module';
import { ProductListModule } from './feature/product/product-list/product-list.module';
import { RegisterModule } from './feature/register/register.module';
import { FooterModule } from './footer/footer.module';
import { MainMenuModule } from './main-menu/main-menu.module';
import { SubNavModule } from './sub-nav/sub-nav.module';
import { SelectedProductModule } from './feature/product/selected-product/selected-product.module';
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
    SelectedProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
