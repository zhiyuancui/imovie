var mongoose 	= require('mongoose')
var MovieSchema = require('../schemas/movie')

var movie = mongoose.model('Movie', MovieSchema);

module.exports = movie

 
