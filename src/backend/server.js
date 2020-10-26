const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')

const PORT = process.env.PORT || 4000;

require('./database');

// Routing
const search = require('./routes/search.route');


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));           
app.use(bodyParser.json());

app.use('/search', search);

app.post('/echo', function(request, response){
    console.log(request.body);      // your JSON
    response.send(request.body);    // echo the result back
  });

// code needed to use static files
app.use(express.static(path.join(__dirname, '../../build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../build'))
})

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});