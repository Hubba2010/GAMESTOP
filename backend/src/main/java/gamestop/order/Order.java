package gamestop.order;

import gamestop.product.Product;
import gamestop.user.User;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.List;

@Entity
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    @OneToMany
    private List<Product> products;
    private LocalDate date;

    public Order() {
    }

    public Order(Long id, User user, List<Product> products, LocalDate date) {
        this.id = id;
        this.user = user;
        this.products = products;
        this.date = date;
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

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }
}
