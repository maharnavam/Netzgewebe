
/**
 * Module dependencies.
 */

var express = require('express')
  , routes  = require('./routes')
  , http    = require('http')
  , path    = require('path')
  , MongoStore = require('connect-mongo')(express);

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon(path.join(__dirname, 'public','images','favicon.ico'))); 
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.responseTime());
  app.locals.pretty = true;
  app.use(express.cookieParser('Poseidon1202'));
  app.use(express.session({
  store: new MongoStore({
               db: 'janus',
               host: '127.0.0.1'
        })
  })); 

  app.use(function(req,res,next){
    res.locals.session = req.session;
    next();
  });

  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/admin', routes.admin)

app.get('/blog', routes.blogSubmitForm)
//app.post('/admin', routes.addUrl)

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
