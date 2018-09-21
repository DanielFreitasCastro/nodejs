var app = require('express')();
var consign = require("consign")();
var bodyParser = require("body-parser");
var expressValidator = require("express-validator")();

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

app.use(expressValidator);

consign
    //Routes
    .include('app/routes')
    //DB Connetion
    .then('config/dbConnection.js')
    //Models
    .then('app/models')

    .into(app);

module.exports = app;