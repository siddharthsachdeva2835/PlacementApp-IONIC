import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map' ;

@IonicPage()
@Component({
  selector: 'page-register-student',
  templateUrl: 'register-student.html',
})
export class RegisterStudentPage {
  Company : any ;
  Students : any ;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.Company = this.navParams.get('data') ;
    this.loadStudents() ;
  }

  loadStudents(){
    this.http.get('http://127.0.0.1:3000/companyPage/'+this.Company._id).map(res => res).subscribe(data => {
      console.log(data) ;
      this.Students = data.unreg ;
    });
  }

  addToRegistered(tar){
    this.http.post('http://127.0.0.1:3000/companyPage',{k:1,t:tar._id,s:this.Company._id}).map(res => res).subscribe(data => {
      console.log(data) ;
    });
    this.loadStudents() ;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterStudentPage');
  }

}
