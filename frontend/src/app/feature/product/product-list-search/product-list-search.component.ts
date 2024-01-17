import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { filter, map, switchMap } from 'rxjs';
import { ProductListTypes, ProductListTypesEntries } from 'src/app/const/product-list-types';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'product-list-search',
  templateUrl: './product-list-search.component.html',
  styleUrls: ['./product-list-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListSearchComponent {

  public productsData$ = this.activatedRoute.queryParamMap
  .pipe(
    map((queryParamMap: ParamMap) => queryParamMap.get('searchPhrase')),
    filter((searchPhrase: string | null): searchPhrase is string => {
      return !!searchPhrase;
    }),
    switchMap((searchPhrase: string) => {
      return this.productService.getProductsByPhrase(searchPhrase);
    })
  );

  constructor(
     private activatedRoute: ActivatedRoute,
     private productService: ProductService
  ) {}
}
