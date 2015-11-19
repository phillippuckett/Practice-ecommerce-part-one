var mongoose = require('mongoose');
var Schema = mongoose.Schema;
	
var Products = Schema({
	name: {type: String, required:true},
	weight: {type: String, required:true},
	manufacture: {type: String, required:true, uppercase:true},
	description: {type: String},
	reviews: [{
		reviewer: {type: String, required:true},
		rating: {type: Number, required:true},
		desc: {type: String},
		date: {type: Date, default: new Date()}
	}]
	
});

module.exports = mongoose.model('Products', Products);