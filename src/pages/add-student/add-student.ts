import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms' ;

@IonicPage()
@Component({
  selector: 'page-add-student',
  templateUrl: 'add-student.html',
})
export class AddStudentPage {
  formgroup:FormGroup ;
  name:AbstractControl ;
  branch:AbstractControl ;
  rollno:AbstractControl ;
  cgpa:AbstractControl ;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formbuilder:FormBuilder) {
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddStudentPage');
  }

}
