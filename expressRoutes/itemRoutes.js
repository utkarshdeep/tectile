
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


itemRoutes.route('/update/:id').put(function (req, res) {
    var id = req.params.id;
    console.log(id);
    Item.findById(id, function (err, item){

        if (err)
            res.send(err);
        item.quantity = req.body.quantity;

        item.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Bear updated!' });
    });

});
});



module.exports = itemRoutes;