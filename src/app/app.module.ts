import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UserListPage } from '../pages/user-list/user-list';
import { CompanyListPage } from '../pages/company-list/company-list';
import { EditUserPage } from '../pages/edit-user/edit-user';
import { EditCompanyPage } from '../pages/edit-company/edit-company';
import { RegistrationsPage } from '../pages/registrations/registrations';
import { RegisterStudentPage } from '../pages/register-student/register-student';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UserListPage,
    CompanyListPage,
    EditUserPage,
    EditCompanyPage,
    RegistrationsPage,
    RegisterStudentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UserListPage,
    CompanyListPage,
    EditUserPage,
    EditCompanyPage,
    RegistrationsPage,
    RegisterStudentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
