import express from 'express';
import CustomersController from '../controllers/customers';

const router = express.Router();
const customersController = new CustomersController();

router.get('/', (req, res) => {
    customersController.get(req, res);
});

export default router;