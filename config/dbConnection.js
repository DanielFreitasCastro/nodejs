
module.exports = function () {
    var mysql = require('mysql');
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'estudo_node'
    });
};