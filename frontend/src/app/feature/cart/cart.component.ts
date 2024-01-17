import { Component } from '@angular/core';
import { map } from 'rxjs';
import { Product } from 'src/app/models/product';
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
  public readonly orderValue$ = this.cartData$.pipe(map((products: Product[]) => {
    return products.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0)
  }))
  public readonly user$ = this.authService.user$.asObservable();

  constructor(
    private cartService: CartService,
    private authService: AuthService
  ){}
  

  public trackByFn(index: number, item: any): number {
    return item.id; // or index, or unique identifier property
  }

  public removeItemFromCart(productId: number) {
    this.cartService.removeItemFromCart(productId);
  }

  public increaseQuantity(product: Product): void {
    this.cartService.addProductToCart(product, 1);
  }

  public decreaseQuantity(product: Product): void {
    if (product.quantity > 1)
    this.cartService.addProductToCart(product, -1);
  }

  public purchase(): void {
    this.cartService.purchase();
  }
}
