import { Component } from '@angular/core';
import { map } from 'rxjs';
import { Product, ProductCart } from 'src/app/models/product';
import { SaveOrderDto } from 'src/app/models/save-order-dto';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  public readonly cartData$ = this.cartService.cart$.pipe(
    map((cartData: SaveOrderDto) => cartData.products)
  );
  public readonly orderValue$ = this.cartData$.pipe(map((products: ProductCart[]) => {
    return products.reduce((acc, curr) => acc + (curr.price * curr.amount), 0)
  }))
  public readonly user$ = this.authService.user$.asObservable();

  constructor(
    private cartService: CartService,
    private authService: AuthService
  ){}
  

  public trackByFn(index: number, item: any): number {
    return index; // or index, or unique identifier property
  }

  public removeItemFromCart(productId: number) {
    this.cartService.removeItemFromCart(productId);
  }

  public increaseQuantity(product: ProductCart): void {
    const updatedAmount = product.amount + 1;
    this.cartService.addProductToCart({...product, amount: updatedAmount});
  }

  public decreaseQuantity(product: ProductCart): void {
    if (product.amount > 1) {
      const updatedAmount = product.amount - 1;
      this.cartService.addProductToCart({...product, amount: updatedAmount});
    }
  }

  public purchase(): void {
    this.cartService.purchase();
  }
}
