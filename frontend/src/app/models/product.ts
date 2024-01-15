import { ProductListTypes } from "../const/product-list-types";

export interface Product {
    id: number;
    productType: keyof typeof ProductListTypes;
    name: string;
    imageUrl?: string | null;
    description: string;
    quantity: number;
    price: number;
    previousPrice?: number | null;
    rating: number;
    ratingAmount: number;
}