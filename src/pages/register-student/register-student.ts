import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-register-student',
  templateUrl: 'register-student.html',
})
export class RegisterStudentPage {
  Students = [
    {
      name : "siddharth sachdeva",
      branch : "ICE",
      rollno : 539 ,
      cgpa : 7.2
    },{
      name : "abhishek",
      branch : "ECE",
      rollno : 4 ,
      cgpa : 7.1
    }
  ] ;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterStudentPage');
  }

}
