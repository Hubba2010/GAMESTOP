import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductModule } from '../product.module';
import { ProductListSearchComponent } from './product-list-search.component';

@NgModule({
  declarations: [ProductListSearchComponent],
  imports: [
    CommonModule,
    ProductModule
  ],
  exports: [ProductListSearchComponent]
})
export class ProductListSearchModule { }
