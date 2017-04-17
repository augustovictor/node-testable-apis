describe('Routes: Products', () => {

    let request;

    before(() => {
        return setupApp()
            .then(app => {
                request = supertest(app);
            })
    });
    
    const defaultProduct = [{
        name: 'Default product',
        description: 'Product description',
        price: 100
    }];

    describe('GET /products', () => {
        it('should return a list of products', done => {
            request
            .get('/products')
            .end((err, res) => {
                expect(res.body).to.eql(defaultProduct);
                done(err);
            });
        });
    });
});