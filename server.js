import express from 'express';
import bodyParser from 'body-parser';
import setupApp from './src/app';

const port = 3000;

setupApp()
.then(app => app.listen(port, () => console.log(`app running on port ${port}`)))
.catch(err => {
    console.log(err);
    process.exit(1);
});