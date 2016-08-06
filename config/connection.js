var Sequelize = require('sequelize');
var connection;

if (process.env.JAWSDB_URL) {
	connection = new Sequelize(process.env.JAWSDB_URL);
} else {
	connection = new Sequelize.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'burgerSeq_db'
	});
};

connection.connect();

module.exports = connection;