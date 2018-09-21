//Importar express
var express = require('express');

//Importar consign
var consign = require('consign')();

//Importar body-parser
var parser = require('body-parser');

//Importar express validator
var validator = require('express-validator');

//Iniciar Express
var app = express();

//Setar View Engine e View do Express
app.set("view engine", 'ejs');
app.set("views", "./app/views");

//Configurar o middleware express.static
app.use(express.static("./app/public"));

//Configurar o middleware body-parser
app.use(parser.urlencoded({ extended: true }));

//Configurar o middleware express-validator
app.use(validator());

consign
    //Rotas
    .include("app/routes")
    //Models
    .include("app/models")
    //Controllers
    .include("app/controllers")
    .into(app);

//Exportar App
module.exports = app;