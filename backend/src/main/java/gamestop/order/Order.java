package gamestop.order;

import com.fasterxml.jackson.annotation.JsonIgnore;
import gamestop.product.Product;
import gamestop.user.User;
import jakarta.persistence.*;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import java.time.LocalDateTime;
import java.util.List;

@Entity(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @JsonIgnore
    @ManyToOne
    @Cascade(CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private User user;
    @ManyToMany
    @JoinColumn(name = "order_id")
    private List<Product> products;
    private LocalDateTime date;
    private Double orderValue;

    public Order() {
    }

    public Order(Long id, User user, List<Product> products, LocalDateTime date, Double orderValue) {
        this.id = id;
        this.user = user;
        this.products = products;
        this.date = date;
        this.orderValue = orderValue;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    public Double getOrderValue() {
        return orderValue;
    }

    public void setOrderValue(Double orderValue) {
        this.orderValue = orderValue;
    }
}
