import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, map } from "rxjs";
import { ProductCart } from "src/app/models/product";
import { SaveOrderDto } from "src/app/models/save-order-dto";
import { User } from "src/app/models/user";
import { AuthService } from "./auth.service";
import { OrderService } from "./order.service";


@Injectable({
    providedIn: 'root'
})
export class CartService {
    public cart$ = new BehaviorSubject<SaveOrderDto>(this.getCartContent());
    public readonly cartItemsAmount$ = this.cart$.asObservable().pipe(
        map(order => {
            return order.products.reduce((acc, currProduct) => acc + currProduct.amount, 0);
        })
    )

    constructor(
        private authService: AuthService,
        private orderService: OrderService,
        private router: Router
    ) {
        this.authService.user$.subscribe((userData: User | null) => {
            const userId = userData?.id;
            this.cart$.next({...this.cart$.value, userId: userId || null})
        })
    }

    public addProductToCart(product: ProductCart): void {
        const cart = {...this.cart$.value};
        const foundCartProduct = cart.products.find(cartProduct => cartProduct.id === product.id);

        if (foundCartProduct) {
            const updatedCartProducts = [...cart.products];
            updatedCartProducts[updatedCartProducts.indexOf(foundCartProduct)] = {...foundCartProduct, amount: product.amount};
            this.cart$.next({...cart, products: [...updatedCartProducts]});
        } else {
            this.cart$.next({...cart, products: [...cart.products, {...product, amount: product.amount}]});
        }
        this.updateLsCart();
    }


    public removeItemFromCart(productId: number): void {
        const cart = {...this.cart$.value};
        const filteredCartProducts = cart.products.filter(cartProduct => cartProduct.id !== productId);
        this.cart$.next({...cart, products: [...filteredCartProducts]});
        this.updateLsCart();
    }

    public getCartContent(): any {
        const cart = localStorage.getItem('cart');
        if (cart) {
            return JSON.parse(cart);
        }
        return {userId: null, products: []};
    }

    public updateLsCart() {
        localStorage.setItem('cart', JSON.stringify({...this.cart$.value}));
    }

    public purchase(): void {
        this.orderService.purchase(this.cart$.value).subscribe(() => {
            this.cart$.next({...this.cart$.value, products: []});
            this.updateLsCart();
            this.router.navigate(['/'])
        });
    }
}