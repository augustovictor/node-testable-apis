import express from 'express';
import bodyParser from 'body-parser';
import app from './src/app';

const app  = express();
const port = 3000;

// MIDDLEWARES
app.use(bodyParser.json());
const myLogger = (req, res, next) => {
    console.log('LOGGED');
    next();
}

// ROUTES
app.get('/', (req, res) => res.send('Hello world!'));

app.listen(3000, () => {
    console.log(`App running on port ${port}!`);
});