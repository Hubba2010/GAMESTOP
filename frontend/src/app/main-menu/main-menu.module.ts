import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MainMenuComponent } from './main-menu.component';
import { SearchProductModule } from './search-product/search-product.module';

@NgModule({
  declarations: [
    MainMenuComponent,
  ],
  imports: [
    CommonModule,
    SearchProductModule,
    MatIconModule,
    RouterModule
  ],
  exports: [MainMenuComponent]
})
export class MainMenuModule { }
