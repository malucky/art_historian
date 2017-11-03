var express = require('express'); //runs on node,
var path = require('path')
var app = express();
var card = require('./models')
var bodyParser = require('body-parser'); //from node_modules
// var mongoose = require('./connect.js')

app.use(bodyParser.json()) //node.js parsing middleware. .json only parses json

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


app.use(express.static(path.resolve('./public')))

///////////////////////////////////////////

///////////////////////////////////////////
app.get('/cats', function(req, res){
  // cats = Cats.selectAll()
  cats = 'moo'
  res.send(cats)
})

app.post('/cards', function(req, res){
  card.insert(req.body)
  // res.send('here is the cat you created', req.body.cat.toString())
  console.log(req.body)
  res.send('here are some cats')
})

app.listen(3000, function(){ //express assumes localhost
  console.log('listening on port 3000')
})
