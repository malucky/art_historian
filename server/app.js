// require express from node_modules
var express = require('express');

// require path, which comes by default from Node
var path = require('path')

// instantiates an express server
var app = express();

// requires body-parser from node_modules, this helps with parsing JSON
var bodyParser = require('body-parser');

// require model.js which contains a Mongoose Card model
var Card = require('./models.js')

// require the Mongoose connection that connects with the running Mongodb from connect.js
var mongoose = require('./connect.js')

// the following would log all requests coming in
// var logger = (req, res, next) => {
//   console.log(`received ${req.method} request at ${req.originalUrl}`);
//   next();
// }

// Configure the Express server to use bodyParser.json() to handle incoming requests that contains JSON payload
// (as opposed to form data from traditional form post which causes a page reload)
app.use(bodyParser.json())
// app.use(logger);

// Configure the Express server to treat the public folder as static (meaning it doesn't change) files
// When a request comes in for "/index.html" or "/components/app.js", the server will know to serve up these
// files from the public folder
// the path.resolve stuff can be written as __dirname + '/public' instead. it's the same thing
app.use(express.static(path.resolve('./public')))

// define a GET handler for /cards
app.get('/cards', function(req, res){
  // find all of the Cards from the Mongodb database
  var allCards = Card.find({})
  // once found, return it as the response data
  .then(function(data){
    res.send(data)
  })
})

// define a POST handler for /cards
app.post('/cards', function(req, res){
  // var item = {
  //   title:req.body.title,
  //   artist:req.body.artist,
  //   period:req.body.period,
  //   date:req.body.date,
  //   material:req.body.material,
  //   image:req.body.image
  // }

  // create a new Mongoose Card based on the data from the POST request
  var newCard = new Card(req.body);
  console.log('this should be mongoose', newCard);
  // tell Mongoose to save this as a new entry in the Mongodb database
  newCard.save();
  res.sendStatus(201);
})

// define a DELETE handler for /cards
app.delete('/cards', function(req, res){
  // find the corresponding card to delete, delete it in Mongodb
  var card = Card.findByIdAndRemove(req.query.id);
  // actually execute the deletion
  card.exec()

  // res.redirect('/') // redirects doesn't work for ajax requests.
  // If you want to redirect, then do it client side

  res.sendStatus(204);
})

// start the Express server
app.listen(3000, function(){ //express assumes localhost
  console.log('listening on port 3000')
})
