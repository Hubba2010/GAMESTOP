import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.scss']
})
export class SearchProductComponent {
  public searchPhrase: string = '';

  constructor(private router: Router) {}

  public searchForProducts(searchPhrase: string): void {
    if (searchPhrase.trim().length)
    this.router.navigate(['/product-list-search'], {queryParams: {searchPhrase}})
  }

}
