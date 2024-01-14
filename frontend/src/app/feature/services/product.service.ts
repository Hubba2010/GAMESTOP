import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "src/app/models/product";

const PRODUCT_URL = 'http://localhost:8080/product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(private http: HttpClient) {}

    public getAll(): Observable<Product[]> {
        return this.http.get<Product[]>(PRODUCT_URL);
    }

    public getAllDiscounted(): Observable<Product[]> {
        return this.http.get<Product[]>(`${PRODUCT_URL}/best-deals`);
    }
}