
var express = require('express');
var salesBillRoutes = express.Router();

var SalesBill = require('../models/SalesBill');

salesBillRoutes.route('/').get(function (req, res) {
    SalesBill.find(function (err, bills) {
        if(err){
            console.log(err);
        }
        else {
            res.json(bills);
        }
    })
});

module.exports = salesBillRoutes;