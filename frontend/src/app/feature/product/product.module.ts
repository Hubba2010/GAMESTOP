import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ProductComponent]
})
export class ProductModule { }
