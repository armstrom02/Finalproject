var profile = require('./routes/profile');
var express = require('express'),
app = express(),
port = process.env.PORT || 3200,

cor=require('cors'),

mongoose = require('mongoose'),
Task = require('./model/structure'),
bodyParser = require('body-parser');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mydatabase'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cor());
app.use('/profile', profile);



var routes = require('./routes/routes');
routes(app);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });




app.listen(port);

console.log('RESTful API server started on: ' + port);
