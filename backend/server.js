const express = require('express');
const mysql = require('mysql');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// MySQL connection
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'nexpay_ledger'
});

mysqlConnection.connect(err => {
    if (err) throw err;
    console.log('MySQL connected...');
});

// MongoDB connection
mongoose.connect('mongodb://localhost/nexpay_auth', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Define MySQL API route
app.get('/api/transactions', (req, res) => {
    const sql = 'SELECT * FROM transactions';
    mysqlConnection.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

// Define MongoDB API route (example for login)
app.post('/api/login', (req, res) => {
    // MongoDB authentication logic here
    res.send('Login API');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
