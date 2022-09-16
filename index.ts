const express = require('express');
const cors = require('cors');
import routerApi from './routes/routes';
import { dbConnection } from './db/mongoDB';
import { config } from './config/config';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
dbConnection(config.dbUrl!);
app.use('/', express.static('public'));

routerApi(app);

app.listen(port, () => {
    console.log('Escuchando en el puerto 3000'); 
});