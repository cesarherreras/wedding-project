require('dotenv').config()

const config = {
    dbUrl: process.env.DB_URI
};

export { config };