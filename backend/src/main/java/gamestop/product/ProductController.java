package gamestop.product;

import gamestop.product.dto.ProductDTO;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public List<ProductDTO> getAll(@RequestParam(required = false, defaultValue = "") ProductType productType){
        return productService.getAll(productType);
    }

    @GetMapping("/best-deals")
    public List<ProductDTO> getAllDiscounted(){
        return productService.getAllDiscounted();
    }

    @GetMapping("/{id}")
    public ProductDTO getProduct(@PathVariable Long id){
        return productService.getProduct(id);
    }

    @PostMapping
    public void addProduct(@RequestBody Product product){
        productService.addProduct(product);
    }

    @PatchMapping("/{id}")
    public void updateProduct(@PathVariable Long id,
                              @RequestBody Product product){
        productService.updateProduct(id, product);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id){
        productService.deleteProduct(id);
    }
}
