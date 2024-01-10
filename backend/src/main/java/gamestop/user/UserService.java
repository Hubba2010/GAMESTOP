package gamestop.user;

import gamestop.order.OrderMapper;
import gamestop.order.OrderService;
import gamestop.order.dto.OrderDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final OrderService orderService;

    public UserService(UserRepository userRepository, OrderService orderService) {
        this.userRepository = userRepository;
        this.orderService = orderService;
    }

    public List<OrderDTO> getOrders(Long id){
        User user = userRepository.findById(id).get();
        return user.getOrders().stream().map(OrderMapper::toDTO).toList();
    }

}
