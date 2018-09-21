
module.exports = function (application) {
    application.get("/noticias", function (req, res) {
        var connection = application.config.dbConnection();
        var NoticiasDAO = new application.app.models.NoticiasDAO(connection);

        NoticiasDAO.getNoticias(function (err, data) {
            if (err) {
                console.log(err);
            }

            res.render("noticias/noticias", {
                noticias: data || [{}]
            });
        });

    });
};