var mongoose = require('./connect.js') //require mongoose database you created in connect.js

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var cardsSchema = new Schema({
    id    : ObjectId,
    name  : String,
    artist: String,
    period: String,
    date  : String,
    material: String,
    image : String
});

var Card = mongoose.model('Card', cardsSchema);

module.exports = Card
