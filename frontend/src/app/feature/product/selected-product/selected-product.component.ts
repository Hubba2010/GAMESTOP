import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, share } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'selected-product',
  templateUrl: './selected-product.component.html',
  styleUrls: ['./selected-product.component.scss']
})
export class SelectedProductComponent {
  public buyAmount = 1;
  public MIN_BUY_AMOUNT = 0;
  public MAX_BUY_AMOUNT = 0;
  public productId: number | undefined;
  public productData: Product | undefined;
  public readonly productData$: Observable<Product> | undefined;
  public readonly subscription = new Subscription();

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private router: Router) {
    this.productId = +this.activatedRoute.snapshot.queryParams['id'];
    this.productData$ = this.productService.getProductById(this.productId).pipe(share());

    this.subscription.add(
      this.productData$.subscribe((productData: Product) => {
        this.productData = productData;
        console.log(productData)
        this.MIN_BUY_AMOUNT = productData.quantity >= 1 ? 1 : 0;
        this.MAX_BUY_AMOUNT = productData.quantity;
      })
    )
  }

  public decreaseBuyAmount(): void {
    if (this.buyAmount > this.MIN_BUY_AMOUNT) this.buyAmount--;
  }

  public increaseBuyAmount(): void {
    if (this.buyAmount < this.MAX_BUY_AMOUNT) this.buyAmount++;
  }

  public check(): void {
    if (this.buyAmount > this.MAX_BUY_AMOUNT) {
      this.buyAmount = this.MAX_BUY_AMOUNT;
    }
    if (this.buyAmount < this.MIN_BUY_AMOUNT) {
      this.buyAmount = this.MIN_BUY_AMOUNT;
    }
  }
  
  public addToCart(): void {
    if (!this.productData) {
      return;
    }

    console.log({product: {...this.productData, quantity: this.buyAmount}})
    const {quantity, ...addedProduct} = {...this.productData};

    this.cartService.addProductToCart({...addedProduct, amount: this.buyAmount});

    // navigate to category of added product
    const queryParams = {
      productType: this.productData.productType
    }
    this.router.navigate(['/product-list'], { queryParams });
  }

}
