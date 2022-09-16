import * as db from 'mongoose';

//MongoDb connection
async function dbConnection(url: string) {
    db.connect(url);
    console.log('[db] conectada con éxito');
}

export { dbConnection };