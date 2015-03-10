var mongoose 	= require('mongoose')
var MovieSchema = require('../schemas/movie')

var Movie = mongoose.model('MOvie', MovieSchema);

module.exports = Movie

 
