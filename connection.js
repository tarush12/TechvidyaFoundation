const mysql = require('mysql')

const pool = mysql.createPool ({
    host: 'localhost',
    user: 'root',
    password: 'mysql@attar.10.aman',
    database: 'firstproject'
});

module.exports = pool;

// pool.query('SELECT * FROM test', (error, results, fields) => {
//     if (error) {
//       console.error('Error executing query: ' + error.stack);
//       return;
//     }
//     console.log('Query results:', results);
//   });
  
