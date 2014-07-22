var Blog = require('../lib/blogs.js').BlogSchema
/*
 * GET home page.
 */
var moment   = require('moment')

exports.index = function(req, res){
  res.render('welcome');
};

exports.admin = function(req, res){
	res.render('admin')
};

exports.blogSubmitForm = function(req, res) {
	res.render('submit_blog')
};

exports.addUrl = function(req, res) {
	var blog = new Blog({url: req.body.url})
	blog.save(function(err, savedBlog) {
		if(err){
			console.log("Error occurred: " + err)
			res.render('admin')
		} else {
			console.log("Saved good")
			res.render('admin')
		}
	})
}
