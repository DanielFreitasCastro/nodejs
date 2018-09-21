module.exports.iniciaChat = function (application, req, res) {

    var dados = req.body;

    req.assert("user", "User inválido!").notEmpty().len(3, 15);

    var erros = req.validationErrors();
    if (erros) {
        res.render("index", {
            validacao: erros
        });
        return;
    }

    res.render("chat");
    application.get("io").emit('msgClient', {
        apelido: dados.user,
        msg: "usuário entrou!"
    });
};