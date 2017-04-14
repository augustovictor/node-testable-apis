class ProductsController {
    get(req, res) {
        const defaultProduct = [{
            name: 'Default product',
            description: 'Product description',
            price: 100
        }];
        
        return res.send(defaultProduct);
    }
}

export default ProductsController;