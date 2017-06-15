//requires

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./modules/index');

//use
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', index);

//spin up the server
var port = process.env.PORT || 3000;

//load the index

app.listen(port, function(){
  console.log('listening on port: ', port);
});
