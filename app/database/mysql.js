/**
 * Created by fredericlopesgoncalvesmagalhaes on 04.07.17.
 */
var mysql = require('mysql');

var connectionSql = mysql.createConnection({
  host: '127.0.0.1',
  port: 8889,
  user: 'root',
  password: 'root',
  database: 'openwtboatsdb'
});

module.exports = {
  connection: function(callback){
    connectionSql.connect(function(err){
      if(err) throw err;
      return callback({success: true});
    });
  },

  end: function(){
    connectionSql.end(function(err){
      console.log("NO OPEN DATABASE CONNECTION.");
      if(err) throw err;
    });
  }
};