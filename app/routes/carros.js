//var dbConnection = require('../../config/dbConnection');

module.exports = function(app) {
  //var connection = dbConnection();

  app.get('/carros', function(req, res) {
    var connection = app.config.dbConnection();
connection.query('SELECT * FROM carro', function(error, result){
    res.render('carros', {carros: result});
});


  });

}
