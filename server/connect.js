var mongoose = require('mongoose'); //requiring from node_modules
// mongoose.createConnection('mongodb://localhost/my_database'); //this method kept breaking. open() is broken or something
mongoose.connect('mongodb://127.0.0.1/my_database', {
  useMongoClient:true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

module.exports = mongoose;
