const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'zixisoft',
  password: '', // Leave password empty
  database: 'test',
  port:3307
});

// Connect to MySQL
connection.connect((err) => {

  if (err) {
    console.error('Error connecting to MySQL:', err.message);
    return;
  }
  console.log('Connected to MySQL');
});


module.exports = connection;







