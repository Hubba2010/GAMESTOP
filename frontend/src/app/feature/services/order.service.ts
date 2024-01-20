import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { OrderDto } from "src/app/models/order-dto";
import { SaveOrderDto } from "src/app/models/save-order-dto";
import { AuthService } from "./auth.service";

const ORDER_URL = 'http://localhost:8080/order';
const USER_URL = 'http://localhost:8080/user';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    constructor(
        private http: HttpClient,
        private authService: AuthService
    ) {}

    public purchase(order: SaveOrderDto): Observable<any> {
        return this.http.post(ORDER_URL, order, {headers: this.createAuthorizationHeader()});
    }

    public getUserOrders(userId: number): Observable<Array<OrderDto>> {
        return this.http.get<Array<OrderDto>>(`${USER_URL}/${userId}/orders`, {headers: this.createAuthorizationHeader()});
    }

    private createAuthorizationHeader() {
    const jwtToken = this.authService.getUser()?.jwtToken;
    if (jwtToken) {
      return new HttpHeaders().set(
          'Authorization', 'Bearer ' + jwtToken
      )
    } else {
      console.error("Not authorized.");
      return new HttpHeaders().set("","");
    }
  }
}