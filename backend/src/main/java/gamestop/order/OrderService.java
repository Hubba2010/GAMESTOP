package gamestop.order;

import gamestop.order.dto.SaveOrderDTO;
import gamestop.product.Product;
import gamestop.product.ProductRepository;
import gamestop.user.User;
import gamestop.user.UserRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final ProductRepository productRepository;
    private final UserRepository userRepository;
    private List<Product> cart = new ArrayList<>();

    public OrderService(OrderRepository orderRepository, ProductRepository productRepository, UserRepository userRepository) {
        this.orderRepository = orderRepository;
        this.productRepository = productRepository;
        this.userRepository = userRepository;
    }

    public void addToCart(Long productId){
        Product product = productRepository.findById(productId).get();
        cart.add(product);
    }

    public void removeFromCart(Long productId){
        Product product = productRepository.findById(productId).get();
        if(cart.contains(product)){
            cart.remove(product);
        }
    }

    public double calculateOrderValue(SaveOrderDTO order){
        double sum = 0;
        for(int i=0;i<order.getProducts().size();i++){
            sum += order.getProducts().get(i).getPrice();
        }
        return sum;
    }

    public void purchase(SaveOrderDTO order){
        Order orderToSave = new Order();
        User user = userRepository.findById(order.getUserId()).get();
        orderToSave.setProducts(order.getProducts());
        orderToSave.setUser(user);
        orderToSave.setDate(LocalDate.now());
        List<Order> orders = user.getOrders();
        orders.add(orderToSave);
        user.setOrders(orders);
        userRepository.save(user);
        orderRepository.save(orderToSave);
    }
}
