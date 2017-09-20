var app = require('./config/server');

var rotaCarros = require('./app/routes/carros');
rotaCarros(app);

var rotaClientes = require('./app/routes/cliente');
rotaClientes(app);

app.get('/', function(req, res) {
    res.send('Página Inicial');
});


app.listen(3000, function(){
  console.log('Server ON');
});
