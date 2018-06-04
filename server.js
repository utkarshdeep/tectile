var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose');
    config = require('./config/db');
    coinRoutes = require('./expressRoutes/coinRoutes');
    salesBillRoutes = require('./expressRoutes/salesBillRoutes');
    itemRoutes = require('./expressRoutes/itemRoutes');
    greyBillRoutes = require('./expressRoutes/greyBillRoutes');

mongoose.Promise = global.Promise;
mongoose.connect(config.db).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));
app.use(cors());
const port = process.env.PORT || 4000;

app.use('/coins', coinRoutes);
app.use('/salesbill', salesBillRoutes);
app.use('/item', itemRoutes);
app.use('/grey',greyBillRoutes);

const server = app.listen(port, function(){
    console.log('Listening on port ' + port);
});