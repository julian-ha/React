var mysql = require('mysql');

//Datenbank Verbindung
  var connection = mysql.createConnection({
    host: '91.204.46.47',
    user: 'k121749_dmUser',
    password: 'Suao19~6',
    database:'k121749_duitsmann'
});

connection.connect(function(err){
    if(err) throw err;
    console.log('connected');
  });


  module.exports = {
    queryDB:(sql, variables = null) =>{
        return new Promise((resolve, reject) => {
            connection.query(sql, variables, (err, results) => {
              if (err) {
                reject(err);
              } else {
                resolve(results);
              }
            })
          });
      }
  }