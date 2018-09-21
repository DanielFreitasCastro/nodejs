module.exports.home = function(application, req, res) {
    var connection = application.config.dbConnection();
    var noticiasDAO = new application.app.models.NoticiasDAO(connection);

    noticiasDAO.getUltimasNoticias(function(err, data){
        console.log('_module.exports.home -> data', data);
        res.render("home/index", {
            ultimasNoticias: data
        });
    });

};