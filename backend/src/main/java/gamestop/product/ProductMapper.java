package gamestop.product;

import gamestop.product.dto.ProductDTO;

public class ProductMapper {

    public static ProductDTO toDTO(Product product) {
        return new ProductDTO(
                product.getId(),
                product.getProductType(),
                product.getName(),
                product.getImageUrl(),
                product.getDescription(),
                product.getPrice(),
                product.getPreviousPrice(),
                product.getRating(),
                product.getRatingAmount()
        );
    }

    public static Product toEntity(ProductDTO productDTO) {
        Product product = new Product();
        product.setProductType(productDTO.productType());
        product.setName(productDTO.name());
        product.setImageUrl(productDTO.imageUrl());
        product.setDescription(productDTO.description());
        product.setPrice(productDTO.price());
        product.setPreviousPrice(productDTO.previousPrice());
        product.setRating(productDTO.rating());
        product.setRatingAmount(productDTO.ratingAmount());

        return product;
    }
}
