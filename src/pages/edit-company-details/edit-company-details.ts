import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map' ;

@IonicPage()
@Component({
  selector: 'page-edit-company-details',
  templateUrl: 'edit-company-details.html',
})
export class EditCompanyDetailsPage {
  Company : any ;
  name : any ;
  Date : any ;
  branches = [0,0,0,0,0,0] ;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public http: HttpClient) {
    this.Company = this.navParams.get('data') ;
    this.setValues() ;
  }

  setValues() {
    this.Date = this.Company.date ;
    this.name = this.Company.name ;
  }

  saveCompany(){
    this.Company.name = this.name ;
    console.log(this.Company) ;
    this.Company.date =  this.Date ;
    this.http.put('http://127.0.0.1:3000/companyPage',{"data": this.Company}).map(res => res).subscribe(data => {
      console.log(data) ;
    });
    this.navCtrl.remove(2,1);
    this.navCtrl.pop() ;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditCompanyDetailsPage');
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
      value: 'bt',
      checked: this.Company.branches[5]
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        console.log('Checkbox data:', data);
        var check = [0,0,0,0,0,0] ;

        for(var i=0 ; i<data.length ; i++){
          if(data[i]=="coe"){
            // this.branches[0] = 1 ;
            // this.Company.branches[0] = 1 ;
            check[0] = 1 ;
          }
          if(data[i]=="it"){
            // this.branches[1] = 1 ;
            // this.Company.branches[1] = 1 ;
            check[1] = 1 ;
          }
          if(data[i]=="ece"){
            // this.branches[2] = 1 ;
            // this.Company.branches[2] = 1 ;
            check[2] = 1 ;
          }
          if(data[i]=="ice"){
            // this.branches[3] = 1 ;
            // this.Company.branches[3] = 1 ;
            check[3] = 1 ;
          }
          if(data[i]=="mpae"){
            // this.branches[4] = 1 ;
            // this.Company.branches[4] = 1 ;
            check[4] = 1 ;
          }
          if(data[i]=="bt"){
            // this.branches[5] = 1 ;
            // this.Company.branches[5] = 1 ;
            check[5] = 1 ;
          }
        }
        this.branches = check ;
        this.Company.branches = check ;
        console.log(this.Company) ;
      }
    });
    alert.present();
  }
}
