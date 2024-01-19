import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SaveOrderDto } from "src/app/models/save-order-dto";
import { AuthService } from "./auth.service";

const ORDER_URL = 'http://localhost:8080/order';

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

    private createAuthorizationHeader() {
    const jwtToken = this.authService.getUser()?.jwtToken;
    if (jwtToken) {
      return new HttpHeaders().set(
          'Authorization', 'Bearer ' + jwtToken
      )
    } else {
      console.log("JWT token not found in the Local Storage");
      return new HttpHeaders().set("","");
    }
  }
}