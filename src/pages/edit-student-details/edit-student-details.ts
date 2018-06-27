import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms' ;
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map' ;

@IonicPage()
@Component({
  selector: 'page-edit-student-details',
  templateUrl: 'edit-student-details.html',
})
export class EditStudentDetailsPage {
  student : any ;
  formgroup:FormGroup ;
  name:AbstractControl ;
  branch:AbstractControl ;
  rollno:AbstractControl ;
  cgpa:AbstractControl ;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formbuilder:FormBuilder, public http: HttpClient) {
    this.student = this.navParams.get('data') ;
    this.formgroup = formbuilder.group({
      name:['',Validators.compose([Validators.required,Validators.pattern('[a-zA-Z ]*')])],
      branch:['',Validators.compose([Validators.required,Validators.pattern('[a-zA-Z ]*')])],
      rollno:['',Validators.required],
      cgpa:['',Validators.required]
    });
    this.name = this.formgroup.controls['name'] ;
    this.branch = this.formgroup.controls['branch'] ;
    this.rollno = this.formgroup.controls['rollno'] ;
    this.cgpa = this.formgroup.controls['cgpa'] ;
    this.setValues()
  }

  setValues(){
    this.name.setValue(this.student.name) ;
    this.branch.setValue(this.student.department) ;
    this.rollno.setValue(this.student.rollno) ;
    this.cgpa.setValue(this.student.cgpa) ;
  }

  addStudent(){
    var s = {
      "name" : this.name.value,
      "department" : this.branch.value,
      "rollno" : this.rollno.value,
      "cgpa" : this.cgpa.value
    } ;

    this.http.post('http://127.0.0.1:3000/studentPortal',{"data": s}).map(res => res).subscribe(data => {
      console.log(data) ;
      this.navCtrl.remove(2,1);
      this.navCtrl.pop() ;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddStudentPage');
  }

}
