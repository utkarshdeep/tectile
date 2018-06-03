var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var item = new Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name: String,
    type: String,
    desc: String,
    amount: Number,
    quantity: Number,

},{
    collection: 'item'
});

module.exports = mongoose.model('Item', item);