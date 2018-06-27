var express = require('express') ;
var router = express.Router() ;
var path = require('path') ;

var mongoose = require('mongoose') ;
mongoose.connect('mongodb://siddharth:1234@ds157639.mlab.com:57639/placement-app-database') ;

var bodyParser = require('body-parser') ;
var urlencodedParser  = bodyParser.urlencoded({extended: true});

var Student = require('./schemas/students') ;


router.get('/',function(req,res){
  console.log("reaching");
  Student.find({},function(err,data){
    if(err) throw err ;
    res.status(200).send({"result":data}) ;
  }) ;
});

router.post('/',function(req,res){
  console.log("Reaching post");
  console.log(req.body.data);
  var newStudent = Student(req.body.data).save(function(err,data){
    if (err) throw err ;
    console.log(data);
    res.json(data) ;
  });
});

// router.put('/:item',function(req,res){
//   Student.update({name:req.params.item},{$set:{name:req.query.m}},function(err,data){
//     if (err) throw err ;
//     console.log("fuck");
//     res.json(data) ;
//   });
// })
//
router.delete('/:item',function(req,res){
  console.log("deleteing");
  Student.find({_id:req.params.item}).remove(function(err,data){
    if (err) throw err ;
    res.json(data) ;
  });
});

module.exports = router ;
