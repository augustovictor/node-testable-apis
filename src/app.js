import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

// ROUTES
app.get('/', (req, res) => {
    res.send('Hello world!')
});


app.get('/products', (req, res) => {
    const product = {
        name: 'Default product',
        description: 'Product description',
        price: 100
    }
    res.send([product]);
});

export default app;