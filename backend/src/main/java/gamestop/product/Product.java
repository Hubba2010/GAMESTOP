package gamestop.product;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private ProductType productType;
    private String name;
    private String imageUrl;
    private String description;
    private int quantity;
    private double price;
    private double previousPrice;
    private double rating;
    private double ratingAmount;

    public Product() {
    }

    public Product(Long id, ProductType productType, String name, String imageUrl, String description, int quantity, double price, double previousPrice, double rating, double ratingAmount) {
        this.id = id;
        this.productType = productType;
        this.name = name;
        this.imageUrl = imageUrl;
        this.description = description;
        this.quantity = quantity;
        this.price = price;
        this.previousPrice = previousPrice;
        this.rating = rating;
        this.ratingAmount = ratingAmount;
    }

    public void setEntityFields(Product existingProduct, Product updatedProduct) {
        if (updatedProduct.getProductType() != null) {
            existingProduct.setProductType(updatedProduct.getProductType());
        }

        if (updatedProduct.getName() != null) {
            existingProduct.setName(updatedProduct.getName());
        }

        if (updatedProduct.getImageUrl() != null) {
            existingProduct.setImageUrl(updatedProduct.getImageUrl());
        }

        if (updatedProduct.getDescription() != null) {
            existingProduct.setDescription(updatedProduct.getDescription());
        }

        if (updatedProduct.getPrice() > 0) {
            existingProduct.setPrice(updatedProduct.getPrice());
        }

        if (updatedProduct.getQuantity() >= 0) {
            existingProduct.setQuantity(updatedProduct.getQuantity());
        }

        if (updatedProduct.getPreviousPrice() >= 0) {
            existingProduct.setPreviousPrice(updatedProduct.getPreviousPrice());
        }

        if (updatedProduct.getRating() >= 0) {
            existingProduct.setRating(updatedProduct.getRating());
        }

        if (updatedProduct.getRatingAmount() >= 0) {
            existingProduct.setRatingAmount(updatedProduct.getRatingAmount());
        }

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ProductType getProductType() {
        return productType;
    }

    public void setProductType(ProductType productType) {
        this.productType = productType;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUl) {
        this.imageUrl = imageUl;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public double getPreviousPrice() {
        return previousPrice;
    }

    public void setPreviousPrice(double previousPrice) {
        this.previousPrice = previousPrice;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public double getRatingAmount() {
        return ratingAmount;
    }

    public void setRatingAmount(double ratingAmount) {
        this.ratingAmount = ratingAmount;
    }
}
