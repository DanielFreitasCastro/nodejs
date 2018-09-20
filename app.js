var app = require("./config/server")();

/**
 * Routes
 */
var routeFormulario = require('./app/routes/formulario')(app);
var routeNoticias = require('./app/routes/noticias')(app);
var routeHome = require('./app/routes/home')(app);

app.listen(3000, function () {
    console.log("Está OK!");
});

