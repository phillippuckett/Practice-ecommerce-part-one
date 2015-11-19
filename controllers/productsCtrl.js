var Product = require('../models/Products');


module.exports = {

	addProduct: function (req, res, next) {
		console.log(req.body);
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
		Product.find(req.query)
			.exec(function (err, result) {
				if (err) {
					return res.status(500).send(
						{
							data: err,
							message: "Server Error"
						})
				}
				else {
					res.send(
						{
							data: result,
							message: "Success!"
						}
						);
				}
			});
	},
	addReview: function (req, res, next) {
		Product.findById(req.query.id, function (err, ProductItem) {
			if (err) {
				res.status(500).send(err);
			} else {
				ProductItem.push(req.body);
				ProductItem.save(function (err, data) {
					if (err) {
						res.status(500).send(err);
					} else {
						res.send(data);
					}
				});
			}
		});
	},
	deleteProduct: function (req, res, next) {
		Product.findByIdAndRemove(req.params.id, function (err, response) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(response);
			}
		})
	},
	updateProduct: function (req, res, next) {
		Product.findById(req.params.id, function (err, product) {

			if (err) res.status(500).send(err);
			else {
				product.name = req.body.name;
				product.manufacture = req.body.manufacture;
				product.weight = req.body.weight;
				product.description = req.body.description;
				product.save(function (err) {

					if (err) {
						res.send(err);
					}
					else {
						res.json(product);
					}
				});
			}
		});
	},
}