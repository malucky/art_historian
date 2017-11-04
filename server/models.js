var mongoose = require('./connect.js') //require mongoose database you created in connect.js

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

//here we define the layout
var cardSchema = new Schema({ //define how mongoose will write data to database;
    id    : ObjectId,
    title  : {type: String, required: true}, //can also add validation / restrictions
    artist: String,
    period: String,
    date  : String,
    material: String,
    image : String
}/*{collection: 'Cards'}adding this extra part overwrites how the collection is named as Cards*/);


//here we create an actual model of the layout above, which we can later use to instantiate and write data to the database
var Card = mongoose.model('Card', cardSchema); //pass in name of this model, and the schema which should be used as the blueprint/template of the model
//mongoose creates and stores the instantiated data above in cards (plural)

module.exports = Card;
