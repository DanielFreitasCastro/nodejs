module.exports.noticias = function (application, req, res) {
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
};

module.exports.noticia = function (application, req, res) {
    var connection = application.config.dbConnection();
    var NoticiasDAO = new application.app.models.NoticiasDAO(connection);
    var idNoticia = req.query;

    NoticiasDAO.getNoticia(idNoticia, function (err, data) {
        if (err) {
            console.log(err);
        }

        res.render("noticias/noticia", {
            noticia: data || [{}]
        });
    });
};