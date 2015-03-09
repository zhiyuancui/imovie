var express 	= require('express');
var port	= process.env.PORT || 8000;
var app		= express();

//Set view directory
app.set('views','./views');
app.set('view engine','jade');
app.listen(port);

console.log('server start on port: ' + port);


//////////////////////////////////////////////////
//             Set the Route                    //
//////////////////////////////////////////////////

// index page
app.get('/', function(req, res){
	res.render('index', 
	{
	 title: 'Front Page'
	})
})

//detail page
app.get('/detail/:id', function(req, res){
        res.render('detail', 
        {
         title: 'Detail Page'
        })
}) 

//admin page
app.get('/admin', function(req, res){
        res.render('admin', 
        {
         title: 'Admin Page'
        })
}) 

//list page
app.get('/admin/list', function(req, res){
        res.render('list',
        {
         title: 'list Page'
        })
})
	
