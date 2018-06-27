import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditUserPage } from '../edit-user/edit-user';
import { AddStudentPage } from '../add-student/add-student';
import { Observable } from 'rxjs/Observable';
// import { UserServiceProvider } from '../../providers/user-service/user-service';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map' ;

@IonicPage()
@Component({
  selector: 'page-user-list',
  templateUrl: 'user-list.html',
})
// public UserServiceProvider: UserServiceProvider
export class UserListPage {
  Students : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    console.log("constructing") ;
    this.loadStudents() ;
  }

  loadStudents(){
    this.http.get('http://127.0.0.1:3000/studentPortal').map(res => res).subscribe(data => {
      this.Students = data.result ;
    });
    // console.log("entered Load Students") ;
    // this.Students = this.UserServiceProvider.getStudents() ;
  }

  openEditList(student){
    this.navCtrl.push(EditUserPage,{data:student}) ;
  }

  openAddList(){
    this.navCtrl.push(AddStudentPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserListPage');
  }
  ionViewWillEnter(){
    this.loadStudents() ;
  }

}
