import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SelectedProductComponent } from './selected-product.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SelectedProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [SelectedProductComponent]
})
export class SelectedProductModule { }
