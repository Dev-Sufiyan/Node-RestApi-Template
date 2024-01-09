const mysql = require('mysql');

function createConnection() {
    const connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'Surya@123',
        database: 'fms'
    });

  // Establish database connection
    connection.connect((err) => {
    if (err) {
      console.error('Error connecting to database:', err);
      return;
    }
    console.log('Connected to database');
    });

  return connection;
}

module.exports = createConnection;
