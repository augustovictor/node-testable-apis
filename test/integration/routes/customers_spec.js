describe('Routes: Customers', () => {
    const defaultCustomer = [{
        name: 'Default customer',
        age: 25
    }];

    describe('GET /customers', () => {
        it('should return a list of customers', function done() {
            request
            .get('/customers')
            .end((err, res) => {
                expect(res.body).to.eql(defaultCustomer);
                done(err);
            });
        });
    });
});