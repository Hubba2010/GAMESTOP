package gamestop.order.dto;

import gamestop.product.Product;
import gamestop.user.User;

import java.util.List;

public class SaveOrderDTO {
    private User user;
    private List<Product> products;

    public SaveOrderDTO() {
    }

    public SaveOrderDTO(User user, List<Product> products) {
        this.user = user;
        this.products = products;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }
}
