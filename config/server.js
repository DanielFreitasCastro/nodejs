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
    //Models
    .then('app/models')
    
    .into(app);

module.exports = app;