class Customer {
    get(req, res) {
        const defaultCustomer = [{
            name: 'Default customer',
            age: 25
        }];

        return res.send(defaultCustomer);
    }
};

export default Customer;