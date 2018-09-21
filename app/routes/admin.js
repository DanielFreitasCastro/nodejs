module.exports = function (application) {
    application.get("/formulario", function (req, res) {
        res.render("admin/form_add_noticia");
    });
    application.post("/noticias/salvar", function (req, res) {
        var noticia = req.body;
        var connection = application.config.dbConnection();
        var noticiasModel = application.app.models.noticiasModel();

        noticiasModel.saveNoticia(connection, function (err, data) {
            res.redirect("/noticias");
        }, noticia);

    });
};