const mongoose = require('mongoose')
const Schema = mongoose.Schema ;


const CompanySchema = new Schema({
  name : String ,
  date : String ,
  branches : Array ,
  registered : Array
});

const CompanyModel = mongoose.model('Companies',CompanySchema) ;

module.exports = CompanyModel ;
