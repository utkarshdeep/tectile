var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Coin = new Schema({
    name:  String,
    price:  Number
},{
    collection: 'coins'
});

module.exports = mongoose.model('Coin', Coin);