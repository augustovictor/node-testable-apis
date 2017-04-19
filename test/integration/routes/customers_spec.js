describe('Routes: Customers', () => {

    let request;

    before(() => {
        return setupApp()
            .then(app => {
                request = supertest(app);
            })
    });
    
    const defaultCustomer = [{
        name: 'Default customer',
        age: 25
    }];

    describe('GET /customers', () => {
        it('should return a list of customers', done => {
            request
            .get('/customers')
            .end((err, res) => {
                expect(res.body).to.eql(defaultCustomer);
                done(err);
            });
        });
    });
});