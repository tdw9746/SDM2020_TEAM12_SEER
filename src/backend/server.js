const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')

const todoRoutes = express.Router();
const PORT = process.env.PORT || 4000;

require('./database');

let Todo = require('./todo.model');

// Routing
const search = require('./routes/search');


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));           
app.use(bodyParser.json());

app.use('/search', search);

// code needed to use static files
app.use(express.static(path.join(__dirname, '../../build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../build'))
})

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});