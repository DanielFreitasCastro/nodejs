var express = require('express');
var app = express();
var consign = require("consign")();
var bodyParser = require("body-parser");
var expressValidator = require("express-validator")();

/**
 * Views
 */
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public/'));
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
    //Controllers
    .then('app/controllers')

    .into(app);

module.exports = app;