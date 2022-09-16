const db = require('mongoose');

db.Promise = global.Promise;

//MongoDb connection
async function dbConnection(url) {
    await db.connect(url, {useNewUrlParser: true});
    console.log('[db] conectada con éxito');
}

module.exports = dbConnection;