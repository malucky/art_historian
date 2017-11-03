var mongoose = require('./connect.js') //require mongoose 

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var Cats = new Schema({
    id    : ObjectId,
    name     : String,
    type      : String
});

module.exports = Cats
