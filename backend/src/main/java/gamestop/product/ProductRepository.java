package gamestop.product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findAllByProductType(ProductType productType);
    List<Product> findAllByNameContainingIgnoreCase(String name);
}
