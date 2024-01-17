import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

// const PRODUCT_URL = 'http://localhost:8080/product';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    constructor(private http: HttpClient) {}

    // public getAll(productType: keyof typeof ProductListTypes): Observable<Product[]> {
    //     return this.http.get<Product[]>(PRODUCT_URL ,{params: {productType}});
    // }

    // public getAllDiscounted(): Observable<Product[]> {
    //     return this.http.get<Product[]>(`${PRODUCT_URL}/best-deals`);
    // }

    // public getProductById(productId: number): Observable<Product> {
    //     return this.http.get<Product>(`${PRODUCT_URL}/${productId}`)
    // }
}