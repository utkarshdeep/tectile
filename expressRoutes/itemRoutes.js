
var express = require('express');
var itemRoutes = express.Router();

var Item = require('../models/item');

itemRoutes.route('/').get(function (req, res) {
    Item.find(function (err, items) {
        if(err){
            console.log(err);
        }
        else {
            res.json(items);
        }
    })
});

module.exports = itemRoutes;