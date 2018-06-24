import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditCompanyPage } from '../edit-company/edit-company';
@IonicPage()
@Component({
  selector: 'page-company-list',
  templateUrl: 'company-list.html',
})
export class CompanyListPage {
  Companies = [
    {
      name : "nagarro",
      branches : ["ICE"],
      date : "22-10-18" ,
      registered : ["siddharth"]
    },{
      name : "accolite",
      branches : ["ECE","ICE"],
      date :  "23-10-18",
      registered : ["abhishek"]
    }
  ] ;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openEditList(){
    this.navCtrl.push(EditCompanyPage) ;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyListPage');
  }

}
