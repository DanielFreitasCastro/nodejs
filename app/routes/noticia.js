
module.exports = function (application) {

    application.get("/noticia", function (req, res) {
        var connection = application.config.dbConnection();
        var NoticiasDAO = new application.app.models.NoticiasDAO(connection);

        NoticiasDAO.getNoticia(function (err, data) {
            if (err) {
                console.log(err);
            }

            res.render("noticias/noticia", {
                noticia: data || [{}]
            });
        });
    });
};