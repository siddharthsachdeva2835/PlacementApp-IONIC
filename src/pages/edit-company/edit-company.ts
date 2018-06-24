import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistrationsPage } from '../registrations/registrations';
import { RegisterStudentPage } from '../register-student/register-student';

@IonicPage()
@Component({
  selector: 'page-edit-company',
  templateUrl: 'edit-company.html',
})
export class EditCompanyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openRegistrationList(){
    this.navCtrl.push(RegistrationsPage) ;
  }

  openRegisterStudent(){
    this.navCtrl.push(RegisterStudentPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditCompanyPage');
  }

}
