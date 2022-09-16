const express = require('express');
const cors = require('cors');
import routerApi from './routes/routes';
import * as bodyParser from 'body-parser';
import { dbConnection } from './db/mongoDB';
import { config } from './config/config';

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
dbConnection(config.dbUrl!);
app.use('/', express.static('public'));

routerApi(app);

app.listen(3000, () => {
    console.log('Escuchando en el puerto 3000'); 
});