var mongoose = require('mongoose'); //requiring from node_modules
// mongoose.createConnection('mongodb://localhost/my_database'); //this method kept breaking. open() is broken or something

// tell Mongoose to connect to the mongodb database running on this computer (127.0.0.1 is essentially localhost)
// the name of the database table for this project is "my_database"
mongoose.connect('mongodb://127.0.0.1/my_database', {
  useMongoClient:true
});

// print some messages depending on whether the connection is successful
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Mongodb connection open')
})

module.exports = mongoose;
