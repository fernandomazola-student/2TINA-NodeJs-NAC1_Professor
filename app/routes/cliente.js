//var dbConnection = require('../../config/dbConnection');

module.exports = function(app) {
  //var connection = dbConnection();

  app.get('/clientes', function(req, res) {
  var connection = app.config.dbConnection();
connection.query('SELECT * FROM cliente', function(error, result){
    res.render('clientes', {clientes: result});
});


  });

}
