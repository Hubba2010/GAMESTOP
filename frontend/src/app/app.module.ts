import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './feature/login/login.module';
import { RegisterModule } from './feature/register/register.module';
import { MainMenuModule } from './main-menu/main-menu.module';
import { SubNavModule } from './sub-nav/sub-nav.module';
import { FooterModule } from './footer/footer.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MainMenuModule,
    SubNavModule,
    LoginModule,
    RegisterModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
