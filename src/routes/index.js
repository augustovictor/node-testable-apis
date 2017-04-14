import express from 'express';
import productsRoute from './products';
import customersRoute from './customers';

const router = express.Router();

router.use('/products', productsRoute);
router.use('/customers', customersRoute);

router.get('/', (req, res) => {
    res.send('Hello world!');
})

export default router;