package gamestop.order;

import gamestop.order.dto.OrderDTO;

public class OrderMapper {

    public static OrderDTO toDTO(Order order){
        return new OrderDTO(
                order.getId(),
                order.getProducts(),
                order.getDate(),
                order.getOrderValue()
        );
    }
}
