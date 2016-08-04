var connection = require('./connection.js');

function sqlObject(ob){
  var arr = [];

  for (var key in ob) {
    arr.push(key + '=' + ob[key]);
  }

  return arr.toString();
}

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(tableInput, colName, req, cb){
        var queryString = 'INSERT INTO ' + tableInput + ' (' + colName + ') VALUES (?)';
        connection.query(queryString, req, function(err, result) {
            cb(result);
        });
    },
    updateOne: function(tableInput, objColVals, condition, cb){
        var queryString = 'UPDATE ' + tableInput + ' SET ' + sqlObject(objColVals) + ' WHERE ' + condition;
        console.log("QUERY STRING == " + queryString);
        connection.query(queryString, function(err, result) {
            cb(result);
        });
    },
};

module.exports = orm;
