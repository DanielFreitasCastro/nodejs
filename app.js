// Importar configurações do servidor
var app = require('./config/server');

// Parametrizar a porta de escuta
app.listen(90, function () {
    console.log("Servidor ONLINE");
});

