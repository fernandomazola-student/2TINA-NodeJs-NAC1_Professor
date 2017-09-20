var mysql = require('mysql');
//REALIZAR O AUTO LOAD, JOGAMOS A CONEXÃO DENTRO DE UMA VARIAVEL

var conecMySQL = function() {
  return mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'fiap',
    database : 'nac'

  });
}

//não estamos exportando a função direto com a conexão
module.exports = function(){
  console.log('O Autoload carregou o mód de conexão');
  return conecMySQL;
}
