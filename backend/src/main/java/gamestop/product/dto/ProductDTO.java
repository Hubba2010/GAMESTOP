package gamestop.product.dto;

import gamestop.product.ProductType;

public record ProductDTO(long id,
                         ProductType productType,
                         String name,
                         String imageUrl,
                         String description,
                         double price,
                         Double previousPrice,
                         double rating,
                         double ratingAmount,
                         int quantity) {
                         }

