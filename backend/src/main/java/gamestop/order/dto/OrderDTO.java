package gamestop.order.dto;

import gamestop.product.Product;
import gamestop.user.User;

import java.time.LocalDate;
import java.util.List;

public record OrderDTO(Long id,
                       List<Product> products,
                       LocalDate date,
                       double orderValue) {
}
