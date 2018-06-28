import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterStudentPage } from '../register-student/register-student';
import { RegistrationsPage } from '../registrations/registrations';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map' ;

@IonicPage()
@Component({
  selector: 'page-registrations',
  templateUrl: 'registrations.html',
})
export class RegistrationsPage {
  Company : any ;
  Students : any ;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.Company = this.navParams.get('data') ;
    this.loadStudents() ;
  }

  loadStudents(){
    this.http.get('http://127.0.0.1:3000/companyPage/'+this.Company._id).map(res => res).subscribe(data => {
      console.log(data) ;
      this.Students = data.reg ;
    });
  }

  removeFromRegistered(tar){
    this.http.post('http://127.0.0.1:3000/companyPage',{k:0,t:tar._id,s:this.Company._id}).map(res => res).subscribe(data => {
      console.log(data) ;
    });
    this.loadStudents() ;
    this.navCtrl.pop() ;
  }

  openRegisterStudent(){
    this.navCtrl.push(RegisterStudentPage,{data:this.Company})
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationsPage');
  }
  ionViewWillEnter(){
    this.loadStudents() ;
  }

}
