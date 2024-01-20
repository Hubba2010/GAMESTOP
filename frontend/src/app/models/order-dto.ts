import { ProductCart, Product } from "./product";

export interface OrderDto {
    products: (Product & ProductCart)[],
    date: string,
    orderValue: number
}