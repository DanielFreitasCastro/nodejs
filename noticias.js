var http = require('http');

var server = http.createServer(function (req, res) {
    var categoria = req.url;
    switch (categoria) {
        case '/tecnologia':
            res.end("<html><body><h1>TECNOLOGIA</h1><body></html>");
            break;
        case '/moda':
            res.end("<html><body><h1>MODA</h1><body></html>");
            break;

        default:
            res.end("<html><body><h1>HOME</h1><body></html>");
            break;
    }
});
server.listen(3000);