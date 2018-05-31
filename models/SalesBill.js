
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var SalesBill = new Schema({
    type: {
        type: String
    },
    voucher: {
        type: String
    },
    items: {
        type: Array
    }
},{
    collection: 'salesBill'
});

var Salesb = mongoose.model('SalesBill', SalesBill);

module.exports = mongoose.model('SalesBill', SalesBill);
