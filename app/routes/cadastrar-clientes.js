module.exports = function(app){
  app.get('/cadastrar-clientes', function(req, res){
  res.render('form_add_cliente');
  });
}
