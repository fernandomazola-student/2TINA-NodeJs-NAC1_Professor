function CarrosDAO(connection){
  this._connection = connection;
}

CarrosDAO.prototype.getCarros = function(callback){
  this._connection.query('SELECT * FROM carro', callback);
}

CarrosDAO.prototype.salvarCarro = function(carro,callback){
  this._connection.query('INSERT INTO carro SET ?', carro, callback);
}

module.exports = function(){
  return CarrosDAO;
}
