import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettingsProvider } from '../app-settings/app-settings';
import 'rxjs/add/operator/map' ;
@Injectable()
export class UserServiceProvider {
  apiUrl = this.appSettings.getApiURL() ;
  constructor(public http: HttpClient, public appSettings: AppSettingsProvider) {
  }
  public getStudents(){
    console.log("entered Get Students") ;
    console.log(this.apiUrl) ;
    return console.log(this.http.get(this.apiUrl + 'studentPortal')) ;
  }
}
