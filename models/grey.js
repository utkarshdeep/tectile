var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var grey = new Schema({
    _id : mongoose.Schema.Types.ObjectId,
    mill: String,
    taka: String,
   ' length(In mts.)': Number,
    rate: String,
    weight: Number,
    type: String

},{
    collection: 'grey'
});

module.exports = mongoose.model('Grey', grey);