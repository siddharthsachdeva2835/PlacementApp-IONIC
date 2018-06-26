import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditUserPage } from '../edit-user/edit-user';
import { AddStudentPage } from '../add-student/add-student';
@IonicPage()
@Component({
  selector: 'page-user-list',
  templateUrl: 'user-list.html',
})
export class UserListPage {
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

  openEditList(){
    this.navCtrl.push(EditUserPage)
  }

  openAddList(){
    this.navCtrl.push(AddStudentPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserListPage');
  }

}
