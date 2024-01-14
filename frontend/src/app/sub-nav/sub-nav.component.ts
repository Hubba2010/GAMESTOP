import { Component } from '@angular/core';
import { ProductListTypes } from '../const/product-list-types';

@Component({
  selector: 'sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.scss']
})
export class SubNavComponent {
  public readonly ProductListTypes = ProductListTypes;
  public readonly ProductListTypesKeys = Object.keys(ProductListTypes) as (keyof typeof ProductListTypes)[];
}
