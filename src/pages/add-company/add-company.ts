import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms' ;
import { AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map' ;

@IonicPage()
@Component({
  selector: 'page-add-company',
  templateUrl: 'add-company.html',
})
export class AddCompanyPage {
  name :any ;
  Date :any ;
  branches = [0,0,0,0,0,0] ;
  testCheckboxOpen : false ;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public http: HttpClient) {
  }

  addCompany(){
    console.log(this.name) ;
    console.log(this.Date) ;
    console.log(this.testCheckboxOpen) ;

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCompanyPage');
  }

  showCheckbox() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Branches');

    alert.addInput({
      type: 'checkbox',
      label: 'COE',
      value: 0
      // checked: this.Company.branches[0]
    });

    alert.addInput({
      type: 'checkbox',
      label: 'IT',
      value: 1
      // checked: this.Company.branches[1]
    });

    alert.addInput({
      type: 'checkbox',
      label: 'ECE',
      value: 2
      // checked: this.Company.branches[2]
    });

    alert.addInput({
      type: 'checkbox',
      label: 'ICE',
      value: 3
      // checked: this.Company.branches[3]
    });

    alert.addInput({
      type: 'checkbox',
      label: 'MPAE',
      value: 4
      // checked: this.Company.branches[4]
    });

    alert.addInput({
      type: 'checkbox',
      label: 'BT',
      value: 5
      // checked: this.Company.branches[5]
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        console.log('Checkbox data:', data);
        this.testCheckboxOpen = true ;
        for(var i=0 ; i<data.length ; i++){
          this.branches[data[i]] = 1 ;
        }
        console.log(this.branches) ;
      }
    });
    alert.present();
  }

}
