import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserListPage } from '../user-list/user-list';
import { CompanyListPage } from '../company-list/company-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openUserList(){
    this.navCtrl.push(UserListPage)
  }

  openCompanyList(){
    this.navCtrl.push(CompanyListPage)
  }
}
