package gamestop.product.dto;

import gamestop.product.ProductType;

public record ProductDTO(ProductType productType,
                         String name,
                         String imageUrl,
                         String description,
                         double price,
                         double previousPrice,
                         double rating,
                         double ratingAmount) {
                         }

