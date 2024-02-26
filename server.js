// server.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// dotenv configuration
dotenv.config()

// reset app object
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// static files access
app.use(express.static(path.join(__dirname, './client/build')));

// routes
app.use('/api/portfolio', require('./routes/portfolioRoute'));

// callback function to init the routes of the app
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});

// port
const PORT = process.env.PORT || 8080;

// listen
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});
