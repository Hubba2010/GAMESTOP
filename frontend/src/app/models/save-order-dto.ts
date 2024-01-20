import { ProductCart } from "./product";

export interface SaveOrderDto {
    userId: number | null,
    products: Array<ProductCart>
}