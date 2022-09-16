const express = require('express');
const routerApi = require('./routes/routes');
const bodyParser = require('body-parser');
const dbConnection = require('./db/mongoDb');
const { config } = require('./config/config');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
dbConnection(config.dbUrl);
app.use('/', express.static('public'));

routerApi(app);

app.listen(3000, () => {
    console.log('Escuchando en el puerto 3000'); 
});