var app = require('express')();
var consign = require("consign")();

/**
 * Views
 */
app.set('view engine', 'ejs');
app.set('views', './app/views');

consign
    //Routes
    .include('app/routes')
    //DB Connetion
    .then('config/dbConnection.js')
    .into(app);

module.exports = app;