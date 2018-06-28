import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditCompanyPage } from '../edit-company/edit-company';
import { AddCompanyPage } from '../add-company/add-company';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map' ;

@IonicPage()
@Component({
  selector: 'page-company-list',
  templateUrl: 'company-list.html',
})
export class CompanyListPage {
  Companies : any ;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    console.log("constructing Company list") ;
    this.loadCompanies() ;
  }

  loadCompanies(){
    this.http.get('http://127.0.0.1:3000/companyPortal').map(res => res).subscribe(data => {
      this.Companies = data.result ;
    });
  }

  openEditList(Company){
    console.log(Company)
    this.navCtrl.push(EditCompanyPage,{data:Company}) ;
  }

  openAddCompany(){
    this.navCtrl.push(AddCompanyPage) ;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyListPage');
  }

  ionViewWillEnter(){
    this.loadCompanies() ;
  }
}
