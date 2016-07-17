/**
 * New node file: This controller will return main html page!
 */
var express=require('express');
var path=require('path');
var starter = express.Router();

//following setting of path is different from express.static middleware.
var pathway=path.join(__dirname,'../public/views');

starter.get('/', function(req, res) {
	// we have to pass path in root though we have define path in express.static middleware because it is different
	res.sendFile('home.html',{"root":pathway});
});

module.exports = starter;