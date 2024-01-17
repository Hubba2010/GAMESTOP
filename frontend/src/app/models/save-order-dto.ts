import { Product } from "./product";

export interface SaveOrderDto {
    userId: number | null,
    products: Array<Product>
}