var express = require('express');
var greyBillRoutes = express.Router();
var greyBill = require("../models/grey");


greyBillRoutes.route('/').get(function (req,
    greyBill.find(function (err, bills) {
        if(err){
            console.log(err);
        }
        else {
            res.json(bills);
        }
    })
});

greyBillRoutes.route('/add').post(function (req, res) {
    var bill = new greyBill(req.body);
    bill.save()
        .then(item => {
            res.status(200).json({'bill': 'Bill added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

module.exports = greyBillRoutes;