
var db = require("../../config/dbConnection");

module.exports = function (app) {

    var connection = db();

    app.get("/noticias", function (req, res) {
        connection.query('SELECT * FROM noticias', function (err, data) {
            if (err) {
                console.error("err", err);
                return;
            }
            res.render("noticias/noticias", {
                noticias: data
            });
        });
    });
};