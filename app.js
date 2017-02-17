const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.connect(config.database);
//check if connected
mongoose.connection.on('connected', () => {
	console.log('Connected to database ' + config.database);
});
//check for error
mongoose.connection.on('error', (err) => {
	console.log('Database Error ' + err);
});

const app = express();
const users = require('./routes/users')

const port = 3000;
//CORS MiddleWare
app.use(cors());

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.use('/users', users);

app.get('/', (req, res) => {
	res.send('Invalid Endpoint');
});

app.listen(port, () => {
	console.log('Server running on port '+ port);
})