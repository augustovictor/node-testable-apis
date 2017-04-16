describe('Routes: Products', () => {
    const defaultProduct = [{
        name: 'Default product',
        description: 'Product description',
        price: 100
    }];

    describe('GET /products', () => {
        it('should return a list of products', function done() {
            request
            .get('/products')
            .end((err, res) => {
                expect(res.body).to.eql(defaultProduct);
                done(err);
            });
        });
    });
});