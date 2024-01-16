import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { filter, map, switchMap } from 'rxjs';
import { ProductListTypes, ProductListTypesEntries } from 'src/app/const/product-list-types';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {

  public typeLabel: ProductListTypes | undefined;
  public productsData$ = this.activatedRoute.queryParamMap
  .pipe(
    map((queryParamMap: ParamMap) => queryParamMap.get('productType')),
    filter((productType: string | null): productType is keyof typeof ProductListTypesEntries => {
      return !!productType;
    }),
    switchMap((productType: keyof typeof ProductListTypesEntries) => {
      this.typeLabel = ProductListTypes[productType];
      if (productType === ProductListTypesEntries.BEST_DEALS) {
        return this.productService.getAllDiscounted();
      }
      return this.productService.getAll(productType);
    })
  );

  constructor(
     private activatedRoute: ActivatedRoute,
     private productService: ProductService
  ) {}
}
