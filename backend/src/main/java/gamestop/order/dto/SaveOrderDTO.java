package gamestop.order.dto;

import gamestop.product.Product;
import gamestop.user.User;

import java.util.List;

public class SaveOrderDTO {
    private Long userId;
    private List<Product> products;

    public SaveOrderDTO() {
    }

    public SaveOrderDTO(Long userId, List<Product> products) {
        this.userId = userId;
        this.products = products;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }
}
