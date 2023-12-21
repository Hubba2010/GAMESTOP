import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SearchProductComponent } from './search-product.component';

@NgModule({
  declarations: [SearchProductComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [SearchProductComponent]
})
export class SearchProductModule { }
