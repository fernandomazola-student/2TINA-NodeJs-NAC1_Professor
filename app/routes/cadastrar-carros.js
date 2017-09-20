module.exports = function(app){
  app.get('/cadastrar-carros', function(req, res){
  res.render('form_add_carro');
  });

  app.post('/carros/salvar', function(req, resp){
    var carro = req.body;

    var connection = app.config.dbConnection();
    var CarrosDAO = new app.app.models.CarrosDAO(connection);

    CarrosDAO.salvarCarro(carro, function(error, result){
      res.redirect('/carros');
    });

  });

}
