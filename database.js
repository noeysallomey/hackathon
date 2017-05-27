var pg = require('pg');

var config = {
  user: 'noel', //env var: PGUSER 
  database: 'voiceup', //env var: PGDATABASE 
  password: '12345', //env var: PGPASSWORD 
  host: 'localhost', // Server hosting the postgres database 
  port: 5432, //env var: PGPORT 
  max: 10, // max number of clients in the pool 
};

const pool = new pg.Pool(config);

function performQuery(query){
	pool.connect(function (err, client, done) {
	  	client.query(query, function(err, results) {
	  		console.log(err);
	  		console.log(results);
	  		done();
	  	});
	});
};


module.exports = performQuery;


//export the query method for passing queries to the pool 
module.exports.query = function (text, values, callback) {
  console.log('query:', text, values);
  return pool.query(text, values, callback);
};
 
// the pool also supports checking out a client for 
// multiple operations, such as a transaction 
module.exports.connect = function (callback) {
  return pool.connect(callback);
};