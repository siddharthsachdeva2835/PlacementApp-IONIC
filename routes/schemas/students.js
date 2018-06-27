const mongoose = require('mongoose') ;
const Schema = mongoose.Schema ;

//Creating Schema and model for a student

const StudentSchema = new Schema({
  name : String ,
  department : String ,
  rollno : Number ,
  cgpa : Number
});

const StudentModel = mongoose.model('Students',StudentSchema) ;

module.exports = StudentModel ;
