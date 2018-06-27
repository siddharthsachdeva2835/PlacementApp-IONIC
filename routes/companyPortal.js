var express = require('express') ;
var router = express.Router() ;
var path = require('path') ;

var mongoose = require('mongoose') ;
mongoose.connect('mongodb://siddharth:1234@ds157639.mlab.com:57639/placement-app-database') ;

var bodyParser = require('body-parser') ;
var urlencodedParser  = bodyParser.urlencoded({extended: true});

var Company = require('./schemas/company') ;

router.get('/',function(req,res){
  Company.find({},function(err,data){
    if(err) throw err ;
    res.status(200).send({"result":data}) ;
  }) ;
});

// router.post('/',function(req,res){
//   var newCompany = Company(req.body).save(function(err,data){
//     if (err) throw err ;
//     res.json(data) ;
//   });
// });
//
// router.delete('/:item',function(req,res){
//   console.log(req.params.item);
//   Company.find({name:req.params.item}).remove(function(err,data){
//     console.log(data);
//     if (err) throw err ;
//     res.json(data) ;
//   });
// });

module.exports = router ;