package gamestop.order.dto;

import gamestop.product.Product;

import java.time.LocalDateTime;
import java.util.List;

public record OrderDTO(Long id,
                       List<Product> products,
                       LocalDateTime date,
                       Double orderValue) {
}
