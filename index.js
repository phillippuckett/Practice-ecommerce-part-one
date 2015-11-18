//dependecies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
// var mongojs = require('mongojs');
var mongoose = require('mongoose');

var ProductsCtrl = require('./controllers/productsCtrl');


//Mongoose
var mongoUri = "mongodb://localhost:27017/Ecommerce";

//Mongo
// var db = mongojs('ecommerce');
// var somethings = db.collection('products');


var app = express();
app.use(express.static(__dirname + '/Frontend'));
app.use(bodyParser.json());
app.use(cors(corsOptions));
var corsOptions = {
    origin: 'http://localhost:3000'
};


app.post('/api/products', ProductsCtrl.addProduct);
app.get('/api/products', ProductsCtrl.findProduct);
app.put('/api/products/:id', ProductsCtrl.updateProduct);
app.delete('/api/products/:id', ProductsCtrl.deleteProduct);


app.listen('3000', function () {
	console.log('Nodemon listening on port 3000');
});
// mongoose connect after express uses app.listen.
mongoose.connect(mongoUri);
mongoose.connection.once('open', function () {
	console.log("Successsfully connected to mongodb");
})	