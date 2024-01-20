package gamestop.order;

import gamestop.order.dto.SaveOrderDTO;
import gamestop.product.Product;
import gamestop.product.ProductRepository;
import gamestop.user.User;
import gamestop.user.UserRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
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
        Double sum = 0.0;
        for(int i=0;i<order.getProducts().size();i++){
            if( order.getProducts().get(i).getAmount() != null) {
                sum += order.getProducts().get(i).getAmount() * order.getProducts().get(i).getPrice();
            }
        }
        return sum;
    }

    public void purchase(SaveOrderDTO order){
        Order orderToSave = new Order();
        User user = userRepository.findById(order.getUserId()).get();
        orderToSave.setProducts(order.getProducts());
        orderToSave.setUser(user);
        orderToSave.setDate(LocalDateTime.now());
        orderToSave.setOrderValue(calculateOrderValue(order));
        List<Order> orders = user.getOrders();
        orders.add(orderToSave);
        user.setOrders(orders);
        orderRepository.save(orderToSave);
    }
}
