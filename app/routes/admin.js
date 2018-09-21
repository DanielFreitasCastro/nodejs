module.exports = function (application) {

    application.get("/formulario", function (req, res) {
        res.render("admin/form_add_noticia", {
            validation: {},
            noticia: {}
        });
    });

    application.post("/noticias/salvar", function (req, res) {
        var noticia = req.body;
        var connection = application.config.dbConnection();
        var NoticiasDAO = new application.app.models.NoticiasDAO(connection);

        req.assert('titulo', 'Deve conter um titulo!').notEmpty();
        req.assert('autor', 'Deve conter um autor!').notEmpty();
        req.assert('data_noticia', 'Data é obrigatória!').len(10, 10);
        req.assert('noticia', 'Deve ter uma noticia entre 10 a 100 caracteres!').len(10, 100);
        req.assert('resumo', 'Deve ter um resumo entre 10 a 100 caracteres!').len(10, 100);

        var erros = req.validationErrors();

        if (erros) {
            return res.render("admin/form_add_noticia", {
                validation: erros,
                noticia: noticia
            });
        }

        NoticiasDAO.saveNoticia(noticia, function (err, data) {
            res.redirect("/noticias");
        });

    });

};