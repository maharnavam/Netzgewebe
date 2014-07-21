
/*
 * GET home page.
 */
var moment   = require('moment')

exports.index = function(req, res){
  res.render('welcome');
};

exports.admin = function(req, res){
	res.send("Admin")
};
