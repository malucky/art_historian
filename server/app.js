var express = require('express'); //runs on node,
var path = require('path')
var app = express();
var Cats = require('./models')
var bodyParser = require('body-parser'); //from node_modules

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
//should be on the frontend using angular
$http.get('/cats').then(response){
  console.log(response.body) /// all of your cats [{cat: 1}, {cat: 2}]
}
var postCat = function(){
  $http.post('/cats', {kitten: {name: $scope.cat.name, type: $scope.cat.type }}).then(response){
    console.log(response.body) // here is the cat you created
  }
}


////////////////////////////////////////////
app.get('/cats', function(req, res){
  cats = Cats.selectAll()
  res.send(cats)
})

app.post('/cats', function(req, res){
  Cats.insert(req.body.kitten)
  res.send('here is the cat you created', req.body.cat.toString())
})

app.listen(3000, function(){ //express assumes localhost
  console.log('listening on port 3000')
})
