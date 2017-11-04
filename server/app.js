var express = require('express');
var path = require('path')
var app = express();
var card = require('./models')
var bodyParser = require('body-parser'); //from node_modules
var Card = require('./models.js')

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
  var allCards = Card.find() //nothing passed into find means select all from mongodb Cards model
  console.log(allCards)
  res.status(200).send(allCards)
})

//adding flash cards
app.post('/cards', function(req, res, next){
  console.log(req.body)
  var item = {
    title:req.body.title,
    artist:req.body.artist,
    period:req.body.period,
    date:req.body.date,
    material:req.body.material,
    image:req.body.image
  }
  console.log('this should be mongoose', Card);
  var newCard = new Card(item);
  newCard.save();
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
