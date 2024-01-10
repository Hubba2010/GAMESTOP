package gamestop.order;

import gamestop.product.Product;
import gamestop.product.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final ProductRepository productRepository;
    private List<Product> cart = new ArrayList<>();

    public OrderService(OrderRepository orderRepository, ProductRepository productRepository) {
        this.orderRepository = orderRepository;
        this.productRepository = productRepository;
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

    public double calculateOrderValue(Order order){
        double sum = 0;
        for(int i=0;i<order.getProducts().size();i++){
            sum += order.getProducts().get(i).getPrice();
        }
        return sum;
    }

    public void purchase(Order order){
        order.getUser().setBalance(order.getUser().getBalance()-calculateOrderValue(order));
        orderRepository.save(order);
    }
}
