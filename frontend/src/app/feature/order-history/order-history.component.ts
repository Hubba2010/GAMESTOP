import { Component } from '@angular/core';
import { NEVER, Observable, map } from 'rxjs';
import { OrderDto } from 'src/app/models/order-dto';
import { AuthService } from '../services/auth.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent {
  public readonly user = this.authService.getUser(); 
  public readonly orderData$: Observable<any> =
   this.user?.id ? this.orderService.getUserOrders(this.user.id) : NEVER;

  constructor(
    private orderService: OrderService,
    private authService: AuthService) {
  }
}