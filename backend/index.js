const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();

// 1. MIDDLEWARE
app.use(cors);
app.use(express.json)


// 2. ROUTE

// 3. MONGODB CONNECTION
mongoose.connect('mongodb://127.0.0.1:27017/authentication').then(() => {
    console.log('Connected to MongoDB');
})

// 4. GLOBAL ERROR HANDLER

// 5. SERVER