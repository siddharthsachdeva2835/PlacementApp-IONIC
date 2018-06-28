var express = require('express') ;
var router = express.Router() ;
var path = require('path') ;

var bodyParser = require('body-parser') ;
var urlencodedParser  = bodyParser.urlencoded({extended: true});

var mongoose = require('mongoose') ;
mongoose.connect('mongodb://siddharth:1234@ds157639.mlab.com:57639/placement-app-database') ;

var Company = require('./schemas/company') ;
var Student = require('./schemas/students') ;

router.get('/:item',function(req,res){
  console.log(req.params.item) ;
  Company.find({_id:req.params.item},function(err,data){
    console.log(data);
    var dat = data[0].registered ;
    Student.find({},function(err,data2){
      // data[0].registered.push(data2[1]) ;
      // data[0].registered.push(data2[3]) ;
      for(var i=0 ; i<dat.length ; i++){
        for(var j=0 ; j<data2.length ; j++){
          if(dat[i].name==data2[j].name){
            data2.splice(j,1);
          }
        }
      }
      res.status(200).send({reg:dat,unreg:data2,s:data}) ;
    });
  });
});

router.post('/',function(req,res){
  console.log(req.body);
  if(req.body.k==0){
    console.log("do something");
    Student.find({_id:req.body.t},function(err,data1){
      Company.update({_id:req.body.s},{$pull:{registered:data1[0]}},function(err,data){
        if(err) throw err ;
        res.status(200);
      });
    });
  }else{
    Student.find({_id:req.body.t},function(err,data1){
      Company.update({_id:req.body.s},{$push:{registered:data1[0]}},function(err,data){
        if(err) throw err ;
        res.status(200);
      });
    });
  }
});

router.put('/',function(req,res){
  console.log(req.body.data);
  Company.update({_id:req.body.data._id},{$set:{name:req.body.data.name,date:req.body.data.date,branches:req.body.data.branches}},function(err,data){
    console.log(data);
    if(err) throw err ;
    res.status(200);
  });
});

module.exports = router ;
