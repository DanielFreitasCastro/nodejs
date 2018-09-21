module.exports = function (application) {

    application.get("/formulario", function (req, res) {
        application.app.controllers.admin.form_add_noticia(application, req, res);
    });

    application.post("/noticias/salvar", function (req, res) {
        application.app.controllers.admin.noticias_salvar(application, req, res);
    });

};