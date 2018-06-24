import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterStudentPage } from '../register-student/register-student';

@IonicPage()
@Component({
  selector: 'page-registrations',
  templateUrl: 'registrations.html',
})
export class RegistrationsPage {
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
  openRegisterStudent(){
    this.navCtrl.push(RegisterStudentPage)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationsPage');
  }

}
