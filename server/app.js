var express = require('express');
var path = require('path')
var app = express();
var bodyParser = require('body-parser'); //from node_modules
var Card = require('./models.js')
var mongoose = require('./connect.js')

var logger = (req, res, next) => {
  console.log(`received ${req.method} request at ${req.originalUrl}`);
  next();
}

app.use(bodyParser.json()) //node.js parsing middleware. only parses json
app.use(logger);

app.use(express.static(path.resolve('./public')))

///////////////////////////////////////////

//home page -- list of all cards by name of work
app.get('/cards', function(req, res){
  var allCards = Card.find({})
  .then(function(data){
    res.send(data)
  }) //nothing passed into find means select all from mongodb Cards model
})

//adding flash cards
app.post('/cards', function(req, res){
  console.log(req.body)
  var item = {
    title:req.body.title,
    artist:req.body.artist,
    period:req.body.period,
    date:req.body.date,
    material:req.body.material,
    image:req.body.image
  }
  var newCard = new Card(item);
  console.log('this should be mongoose', newCard);
  newCard.save();
  res.sendStatus(201);
})


app.listen(3000, function(){ //express assumes localhost
  console.log('listening on port 3000')
})
