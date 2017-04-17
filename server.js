import express from 'express';
import bodyParser from 'body-parser';
import setupApp from './src/app';

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

setupApp()
    .then(app => app.listen(port, () => console.log(`App running on port ${port}`)))
    .catch(err => {
        console.log(`Error: ${err}`);
        process.exit(1);
    });