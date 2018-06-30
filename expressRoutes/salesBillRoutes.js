
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

salesBillRoutes.route('/add').post(function (req, res) {
    var bill = new SalesBill(req.body);
    bill.save()
        .then(item => {
            res.status(200).json({'bill': 'Bill added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

module.exports = salesBillRoutes;