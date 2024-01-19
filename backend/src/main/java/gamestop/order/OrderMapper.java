package gamestop.order;

import gamestop.order.dto.OrderDTO;

public class OrderMapper {

    public static OrderDTO toDTO(Order order){
        double sum = 0;
        for(int i=0;i<order.getProducts().size();i++){
            sum += order.getProducts().get(i).getPrice();
        }
        return new OrderDTO(
                order.getId(),
                order.getProducts(),
                order.getDate(),
                sum
        );
    }
}
