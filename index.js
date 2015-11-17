//dependecies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongojs = require('mongojs');


//Mongo
var db = mongojs('ecommerce');
var somethings = db.collection('products');

//express
var app = express();

app.use(express.static(__dirname + '/Frontend'));

app.use(bodyParser.json());
app.use(cors(corsOptions));
var corsOptions = {
    origin: 'http://localhost:3000'
};


//endpoints
app.post('/api/products/', function (req, res, next) {
	somethings.insert(req.body, function (err, result) {
		if (err) {
			res.send(err);
		}
		else {
			res.send(result);
		}
	});
})

app.get('/api/products/', function (req, res, next) {
	somethings.find(req.query, function (err, result) {
		if (err) {
			res.send(err);
		}
		else {
			res.send(result);
		}
	});
})

app.put('/api/products/:id', function (req, res, next) {
	somethings.update({ _id: mongojs.ObjectId(req.params.id) }, req.body, function (err, result) {
		if (err) {
			res.send(err);
		}
		else {
			res.send(result);
		}
	})
})

app.delete('/api/products/:id', function (req, res, next) {
	somethings.remove({ "_id": mongojs.ObjectId(req.params.id) }, function (err, result) {
		if (err) {
			res.send(err);
		}
		else {
			res.send(result);
		}
	});
})




app.listen('3000', function () {
	console.log('Nodemon listening on port 3000');
});
