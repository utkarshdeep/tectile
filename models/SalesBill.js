var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var SalesBill = new Schema({
    type: {
        type: String
    },
    voucher: {
        type: String
    }
},{
    collection: 'salesBill'
});

module.exports = mongoose.model('SalesBill', SalesBill);
