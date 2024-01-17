import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SearchProductComponent } from './search-product.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchProductComponent],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    FormsModule
  ],
  exports: [SearchProductComponent]
})
export class SearchProductModule { }
