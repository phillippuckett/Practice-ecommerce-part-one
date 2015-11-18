var Product = require('../models/Products');


module.exports = {

	addProduct: function (req, res, next) {
		new Product(req.body).save(function (err, data) {
			if (err) {
				res.status(500).send(err);
			}
			else {
				res.send(data);
			}
		});
	},
	findProduct: function (req, res, next) {
		new Product(req.body).save(function (err, data) {
			if (err) {
				res.status(500).send(err);
			}
			else {
				res.send(data);
			}
		});
	}



}