
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


itemRoutes.route('/type/:type').get(function (req, res) {
    var type = req.params.type;
        Item.find({'type': type}, function (err, items){
        res.json(items);
    });

});

module.exports = itemRoutes;