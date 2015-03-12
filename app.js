var express 	= require('express');
var path	= require('path');
var mongoose 	= require('mongoose')
var port	= process.env.PORT || 8000;
var app		= express();
var bodyParser  = require('body-parser');

var Movie	= require('./models/movie')
var _		= require('underscore')

mongoose.connect('mongodb://localhost/imovie')


//Set view directory
app.set('views','./views/pages');
app.set('view engine','jade');
app.use(express.static(path.join(__dirname,'bower_components')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.listen(port);

console.log('server start on port: ' + port);


//////////////////////////////////////////////////
//             Set the Route                    //
//////////////////////////////////////////////////

// index page
app.get('/', function(req, res){
	Movie.fetch(function(err, movies) {
		if(err)
	  	{
			console.log(err)
	  	}
		res.render('index', 
			{
	 		title: 'Front Page', 
	 		movies: movies	
		})
	})
})

//detail page
app.get('/movie/:id', function(req, res){
        var id = req.params.id
	
	Movie.findById(id, function (err, movie) {
		console.log(movie);
		res.render('detail', {
			title: 'Detail Page' + movie.title,
			movie: movie
		})
	})
}) 

//admin page
app.get('/admin/movie', function(req, res){
        res.render('admin', 
        {
         title: 'Admin Page',
	 movie:{
	  tittle: '',
	  directory: '',
	  country:'',
	  year:'',
	  poster: '',
	  flash: '',
	  plot: '',
	  language: ''
	}
        })
}) 


//admin update movie
app.get('/admin/update/:id', function(req, res){
	var id = req.params.id

	if(id){
		Movie.findById(id, function(err, movie){
			res.render('admin',{
			  title: 'admin Update',
			  movie: movie
			})
		})
	}
})





//admin post movie
app.post('/admin/movie/new' , function(req,res){
	var id = req.body.movie._id

	var movieObj = req.body.movie
	var _movie
	console.log(id)	
	if (id !== 'undefined'){
		Movie.findById(id, function(err, movie){
		if (err)
		{
			 console.log(errr)
		}
		_movie = _.extend(movie, movieObj)
		_movie.save(function(err, movie){
			if(err){
				console.log(err)
			}
			res.redirect('/movie/' + movie._id)

			})	

		})

	}
	else{
	_movie = new Movie({
	  directory: movieObj.director,
	  title:     movieObj.title,
	  country:   movieObj.country,
	  language:  movieObj.language,
	  year:      movieObj.year,
	  poster:    movieObj.poster,
	  plot:	     movieObj.plot,
	  flash:     movieObj.flash,
	})

	_movie.save(function(err, movie){
               if(err){
               		console.log(err)
              	}
                res.redirect('/movie/' + movie._id)

	})

	}
})





//list page
app.get('/admin/list', function(req, res){

	Movie.fetch(function(err, movies) {
          if(err)
          {
                console.log(err)
          }
          res.render('index',
          {
		title: 'List Page',
                movies: movies
          })
        })
})

	
