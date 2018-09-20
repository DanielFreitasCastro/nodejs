
module.exports = function (app) {
    app.get("/noticias", function (req, res) {
        var connection = app.config.dbConnection();
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