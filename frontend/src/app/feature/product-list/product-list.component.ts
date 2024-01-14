import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit, OnDestroy {

  private subscription = new Subscription();
  public type: string | null | undefined;

  constructor(
     private activatedRoute: ActivatedRoute,
     private cdr: ChangeDetectorRef,
     private productService: ProductService
  ) {}

  public ngOnInit(): void {
    this.subscription.add(
      this.activatedRoute.queryParamMap.subscribe((queryParams: ParamMap) => {
        this.type = queryParams.get('productType');
        this.cdr.markForCheck();
        this.productService.getAll().subscribe(products => {
          console.log('All products:', products);
        })

        this.productService.getAllDiscounted().subscribe(products => {
          console.log('Discounted products:', products);
        })
      })
    )
  }

  public ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }
}
