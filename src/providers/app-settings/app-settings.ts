import { Injectable } from '@angular/core';

const CONFIG = {
  apiUrl : 'http://127.0.0.1:3000/'
}
@Injectable()
export class AppSettingsProvider {
  constructor() {}
  public getApiURL(){
    return CONFIG.apiUrl ;
  }
}
