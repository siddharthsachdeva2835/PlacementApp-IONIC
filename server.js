var logger = require('morgan') ;
var http = require('http') ;
var express = require('express');
var path = require('path') ;
var cors = require('cors') ;
var helmet = require('helmet') ;
var app = express();
app.use(helmet()) ;

var bodyParser = require('body-parser') ;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors()) ;
// var api = require('./routes/api');
// app.use('/api', api);

var studentPortal = require('./routes/studentPortal');
app.use('/studentPortal', studentPortal);

// var companyPortal = require('./routes/companyPortal');
// app.use('/companyPortal', companyPortal);
//
// var companyPage = require('./routes/companyPage');
// app.use('/companyPage', companyPage);

app.get('/',function(req,res){
  res.redirect('/studentPortal')
});

if (process.env.NODE_ENV === "development"){
  app.use(logger('dev')) ;
}
// Register jsRender with express to handle html files
// nodeJsRender.express('html', app);

var port = process.env.PORT || 3000 ;

http.createServer(app).listen(port,function(err){
  console.log("listening to "+port);
});
