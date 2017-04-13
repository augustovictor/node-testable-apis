import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    const product = {
        name: 'Default product',
        description: 'Product description',
        price: 100
    }
    res.send([product]);
})

export default router;