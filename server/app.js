var express = require('express');
var path = require('path')
var app = express();
var card = require('./models')
// var db = require()
var bodyParser = require('body-parser'); //from node_modules
// var mongoose = require('./connect.js')
var mongoose = require('./models.js').Card

app.use(bodyParser.json()) //node.js parsing middleware. only parses json

// var bodyParser = function(req, res, next){
//   var string = ''
//   req.on('data', function(stuff){
//     string += stuff
//   })
//   req.on('end', function(){
//     req.body = string
//     next()
//   })
// }


app.use(express.static(path.resolve('./public'))) //? how does it know when to send?

///////////////////////////////////////////

//home page -- list of all cards by name of work
app.get('/', function(req, res){
  Card.find() //nothing passed into find means select all from mongodb Cards model
  res.status(200).send()
})

//adding flash cards
app.post('/cards', function(req, res, next){
  console.log(req.body.title)
  var item = {
    title:req.body.title,
    artist:req.body.artist,
    period:req.body.period,
    date:req.body.date,
    material:req.body.material,
    image:req.body.image
  }
  console.log(item)
  // var data = new Card(item);
  // data.save();
  res.redirect('/');
})

//testing page
app.get('/test', function(req, res, next){
  console.log(req.body.image)
  res.send(req.body)
})

app.listen(3000, function(){ //express assumes localhost
  console.log('listening on port 3000')
})
