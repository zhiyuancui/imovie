var express 	= require('express');
var path	= require('path');
var port	= process.env.PORT || 8000;
var app		= express();

//Set view directory
app.set('views','./views/pages');
app.set('view engine','jade');
app.use(express.static(path.join(__dirname,'bower_components')));
app.listen(port);

console.log('server start on port: ' + port);


//////////////////////////////////////////////////
//             Set the Route                    //
//////////////////////////////////////////////////

// index page
app.get('/', function(req, res){
	res.render('index', 
	{
	 title: 'Front Page', 
	 movies: [{
	  title: 'RotCop',
	  _id : 1,
	  poster: 'http://www.baidu.com'},
	  {
	   title: 'RotCop',
	   _id : 2,
	   poster: 'http://www.baidu.com'},
	  {
	   title: 'The Matrix',
	   _id : 3,
	   poster: 'http://www.baidu.com'}
	 ]	
	})
})

//detail page
app.get('/detail/:id', function(req, res){
        res.render('detail', 
        {
         title: 'Detail Page',
	 movie: {
	   director: 'Richard Cui',
	   country:  'United States',
	   title: 'RotCop',
	   year: 2014,
	   poster: 'http://www.baidu.com',
	   language: 'Englisth',
	   flash: 'http://player.youku.com/plyer.php/sid/XNjA1Njc0NTUy/v.swf',
	   plot: 'hehhe'
	}
        })
}) 

//admin page
app.get('/admin', function(req, res){
        res.render('admin', 
        {
         title: 'Admin Page',
	 movie:{
	  title: '',
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

//list page
app.get('/admin/list', function(req, res){
        res.render('list',
        {
         title: 'list Page',
	 movie: [{
	  title: 'RotCop',
          _id : 1,
          directory: 'Richard Cui',
	  country: 'United States',
	  year: 2014,
	  poster: 'http://www.baidu.com',
	  language: 'Englist',
	  flash: 'http://player.youku.com/plyer.php/sid/XNjA1Njc0NTUy/v.swf',
          plot: 'hehhe'
         }]      
        })
})	
