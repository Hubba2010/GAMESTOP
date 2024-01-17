package gamestop.product;

import gamestop.product.dto.ProductDTO;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {
    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<ProductDTO> getAll(ProductType productType){
        if(productType!=null){
            return productRepository.findAllByProductType(productType).stream().map(ProductMapper::toDTO).toList();
        }
        return productRepository.findAll().stream().map(ProductMapper::toDTO).toList();
    }

    public List<ProductDTO> getAllDiscounted(){
        List<Product> allProducts = productRepository.findAll();
        List<Product> products = new ArrayList<>();
        for(int i=0;i< allProducts.size();i++){
            if(allProducts.get(i).getPreviousPrice() != null){
                products.add(allProducts.get(i));
            }
        }
        return products.stream().map(ProductMapper::toDTO).toList();
    }

    public ProductDTO getProduct(Long id){
        return productRepository.findById(id).map(ProductMapper::toDTO).get();
    }

    public List<ProductDTO> findProducts(String name){
        return productRepository.findAllByNameContainingIgnoreCase(name).stream().map(ProductMapper::toDTO).toList();
    }

    public void addProduct(Product product){
        productRepository.save(product);
    }

    public void updateProduct(Long id, Product product){
        Product productToUpdate = productRepository.findById(id).get();
        productToUpdate.setEntityFields(productToUpdate, product);
        productRepository.save(productToUpdate);
    }

    public void deleteProduct(Long id){
        if(productRepository.existsById(id)){
            productRepository.deleteById(id);
        }
    }

}
