var mongoose = require('mongoose')
  , moment   = require('moment')

mongoose.connect("mongodb://localhost/aggregator");

mongoose.connection.on('connected', function() {
	console.log("Connected to mongodb")
})

mongoose.connection.on('error', function(err) {
	console.log("Connection error : " + err)
})

mongoose.connection.on('close', function() {
	console.log('Closed')
})

process.on('SIGINT', function() {
	 mongoose.connection.close(function() {
	 	console.log("Closing MongoDB connection");
	 	process.exit(0);
	 });
})

var blogSchema = new mongoose.Schema({
	url: {type: String, unique: true},
	submitted_on: {type: String, default: Date.now},
	email: {type: String},
	approved: {type: Boolean, default: false},
	approved_on: Date
})

module.exports.BlogSchema = mongoose.model('Blog', blogSchema)