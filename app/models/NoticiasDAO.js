function NoticiasDAO(connection) {
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function (callback) {
    this._connection.query('select * from noticias', callback);
};

NoticiasDAO.prototype.getNoticia = function (noticiaInfos, callback) {
    this._connection.query('select * from noticias where id_noticia = '+noticiaInfos.id, callback);
};

NoticiasDAO.prototype.saveNoticia = function (noticia, callback) {
    this._connection.query('insert into noticias set ?', noticia, callback);
};

NoticiasDAO.prototype.getUltimasNoticias = function (callback) {
    this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);
};

module.exports = function () { return NoticiasDAO; };