package gamestop.order.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import gamestop.product.Product;

import java.time.LocalDateTime;
import java.util.List;

public record OrderDTO(Long id,
                       List<Product> products,
                       @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
                       LocalDateTime date,
                       Double orderValue) {
}
