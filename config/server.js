var app = require('express')();
var consign = require("consign")();
var bodyParser = require("body-parser");

/**
 * Views
 */
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

consign
    //Routes
    .include('app/routes')
    //DB Connetion
    .then('config/dbConnection.js')
    //Models
    .then('app/models')

    .into(app);

module.exports = app;