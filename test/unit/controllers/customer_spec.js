import CustomersController from '../../../src/controllers/customers';
import sinon from 'sinon';

describe('Controller: Customers', () => {
    const defaultCustomer = [{
        name: 'Default customer',
        age: 25
    }];

    describe('get() customers', () => {
        it('should return a list of customers', () => {
            const request = {};
            const response = {
                send: sinon.spy()
            };

            const customersController = new CustomersController();
            customersController.get(request, response);

            expect(response.send.called).to.be.true;
            expect(response.send.calledWith(defaultCustomer)).to.be.true;
        });
    });
    
});