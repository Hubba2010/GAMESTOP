import { Component, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../feature/services/auth.service';
import { CartService } from '../feature/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {
  private userDetailsVisibleSub = new BehaviorSubject<boolean>(false);
  public userDetailsVisible$ = this.userDetailsVisibleSub.asObservable();

  public readonly isLoggedIn$ = this.authService.isLoggedIn$.asObservable();
  public readonly user$ = this.authService.user$.asObservable();
  public readonly cartItemsCounter$ = this.cartService.cartItemsAmount$;

  constructor(
    private authService: AuthService,
    private cartService: CartService,
    private router: Router
  ){}

  public toggleUserDetailsVisibility(): void {
    this.userDetailsVisibleSub.next(!this.userDetailsVisibleSub.value);
  }

  public logout(): void {
    this.toggleUserDetailsVisibility();
    this.authService.logout();
  }

  public checkHistory(): void {
    this.toggleUserDetailsVisibility();
    this.router.navigate(['/order-history']);
  }
}
