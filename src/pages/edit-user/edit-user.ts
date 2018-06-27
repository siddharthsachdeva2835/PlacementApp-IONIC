import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map' ;
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms' ;
import { EditStudentDetailsPage } from '../edit-student-details/edit-student-details';

@IonicPage()
@Component({
  selector: 'page-edit-user',
  templateUrl: 'edit-user.html',
})
export class EditUserPage {
  student : any ;
  formgroup:FormGroup ;
  name:AbstractControl ;
  branch:AbstractControl ;
  rollno:AbstractControl ;
  cgpa:AbstractControl ;

  constructor(public navCtrl: NavController, public navParams: NavParams,public formbuilder:FormBuilder, public http: HttpClient) {
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
  }

  setValues(){
    this.name.setValue(this.student.name) ;
    this.branch.setValue(this.student.department) ;
    this.rollno.setValue(this.student.rollno) ;
    this.cgpa.setValue(this.student.cgpa) ;
  }

  deleteUser(id){
    this.http.delete('http://127.0.0.1:3000/studentPortal/'+this.student._id).map(res => res).subscribe(data => {
      console.log(data) ;
      this.navCtrl.pop() ;
    });
  }

  editDetails(){
    this.navCtrl.push(EditStudentDetailsPage,{data:this.student}) ;
    this.http.delete('http://127.0.0.1:3000/studentPortal/'+this.student._id).map(res => res).subscribe(data => {
      console.log(data) ;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditUserPage');
    this.setValues() ;
  }

}
