const express = require('express');

const formRouter = require('./formRouter');

function routerApi(app) {
    app.use('/form', formRouter);
}

module.exports = routerApi;