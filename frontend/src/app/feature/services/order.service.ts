import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SaveOrderDto } from "src/app/models/save-order-dto";

const ORDER_URL = 'http://localhost:8080/order';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    constructor(private http: HttpClient) {}

    public purchase(order: SaveOrderDto): Observable<any> {
        console.log(order)
        return this.http.post(ORDER_URL, order);
    }

    // public getAll(productType: keyof typeof ProductListTypes): Observable<Product[]> {
    //     return this.http.get<Product[]>(PRODUCT_URL ,{params: {productType}});
    // }

    // public getAllDiscounted(): Observable<Product[]> {
    //     return this.http.get<Product[]>(`${PRODUCT_URL}/best-deals`);
    // }

    // public getProductById(productId: number): Observable<Product> {
    //     return this.http.get<Product>(`${PRODUCT_URL}/${productId}`)
    // }

    // public getProductsByPhrase(searchPhrase: string): Observable<Product[]> {
    //     return this.http.get<Product[]>(`${PRODUCT_URL}/find`, {params: {name: searchPhrase}})
    // }
    
//   public signup(signupRequest: any): Observable<any> {
    // return this.http.post(BASE_URL + "sign-up", signupRequest)
//   }
}