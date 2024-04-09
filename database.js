const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'database-1.cn8s6csmmq4m.ap-south-1.rds.amazonaws.com',
    user: 'admin',
    password: 'RDS.xxuj21',
    database: 'database-1'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database');
});

const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
`;

connection.query(createTableQuery, (err, results) => {
    if (err) {
        console.error('Error creating table:', err);
        return;
    }
    console.log('Table created successfully');
    connection.end();
});
