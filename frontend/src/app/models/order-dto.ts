import { ProductCart, Product } from "./product";

export interface OrderDto {
    products: (Product & ProductCart)[],
    date: [number, number, number, number, number, number],
    orderValue: number
}