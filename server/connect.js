var mongoose = require('mongoose'); //requiring from node_modules
mongoose.connect('mongodb://localhost/my_database'); //creating database
module.exports = mongoose;
