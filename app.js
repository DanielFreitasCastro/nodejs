// Importar configurações do servidor
var app = require('./config/server');

// Parametrizar a porta de escuta
var server = app.listen(90, function () {
    console.log("Servidor ONLINE");
});

var io = require('socket.io').listen(server);

app.set("io", io);

// Criar conexão por WebSocket
io.on('connection', function (socket) {
    console.log('user conectado!');
    socket.on("disconnect", function(){
        console.log('user desconectado!');
    });
});
