const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();

// 1. MIDDLEWARE
app.use(cors);
app.use(express.json)


// 2. ROUTE

// 3. MONGODB CONNECTION
mongoose.connect('mongodb://localhost:27017/auth').then(() => {
    console.log('Connected to MongoDB').catch((error) => {
        console.error("Failed to connect to MongoDB", error)
    })
})

// 4. GLOBAL ERROR HANDLER

// 5. SERVER
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});