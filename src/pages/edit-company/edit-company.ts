import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistrationsPage } from '../registrations/registrations';
import { RegisterStudentPage } from '../register-student/register-student';
import { AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map' ;

@IonicPage()
@Component({
  selector: 'page-edit-company',
  templateUrl: 'edit-company.html',
})
export class EditCompanyPage {
  Company : any ;
  Date : any ;
  name :any ;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.Company = this.navParams.get('data') ;
    console.log(this.Company.branches);
    this.setValues() ;
  }

  setValues() {
    this.Date = this.Company.date ;
    this.name = this.Company.name ;
  }

  openRegistrationList(){
    this.navCtrl.push(RegistrationsPage) ;
  }

  openRegisterStudent(){
    this.navCtrl.push(RegisterStudentPage)
  }

  deleteCompany(){
    this.http.delete('http://127.0.0.1:3000/companyPortal/'+this.company._id).map(res => res).subscribe(data => {
      console.log(data) ;
      this.navCtrl.pop() ;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditCompanyPage');
  }

  getDate() {
    console.log(this.Date) ;
  }

  showCheckbox() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Branches');

    alert.addInput({
      type: 'checkbox',
      label: 'COE',
      value: 'coe',
      checked: this.Company.branches[0]
    });

    alert.addInput({
      type: 'checkbox',
      label: 'IT',
      value: 'it',
      checked: this.Company.branches[1]
    });

    alert.addInput({
      type: 'checkbox',
      label: 'ECE',
      value: 'ece',
      checked: this.Company.branches[2]
    });

    alert.addInput({
      type: 'checkbox',
      label: 'ICE',
      value: 'ice',
      checked: this.Company.branches[3]
    });

    alert.addInput({
      type: 'checkbox',
      label: 'MPAE',
      value: 'mpae',
      checked: this.Company.branches[4]
    });

    alert.addInput({
      type: 'checkbox',
      label: 'BT',
      value: 'value2',
      checked: this.Company.branches[5]
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        console.log('Checkbox data:', data);
        this.testCheckboxOpen = false;
        this.testCheckboxResult = data;
      }
    });
    alert.present();
  }

}
