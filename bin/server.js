import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import { port } from '../config';
import { logger } from "../src/common/utilities/logger";

const app = express();
const apiVersion = 'v1';
const apiRoot = `/api/${apiVersion}`;

const shortUrl = require('../src/routes/api/v1/shortUrl');

app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE' );
    res.header('Access-Control-Allow-Origin', '*');
    res.header('AAccess-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, filename');
    next()
;});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// app.use(`${apiRoot}/shortUrl`, shortUrl);

app.listen(port, () => {
    logger.INFO(`Application Started on port ${port}!`);
});

module.exports = app;
