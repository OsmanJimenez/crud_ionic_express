const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'sa',
    password: '1234567',
    database: 'DB_Test',
    port: 3306
})

mysqlConnection.connect(err => {
if(err){
    console.log('Error connecting to database: ', err);
}else{
    console.log('Connected to database');
}
})

module.exports = mysqlConnection;