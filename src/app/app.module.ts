import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
import { AddStudentPage } from '../pages/add-student/add-student';
import { AddCompanyPage } from '../pages/add-company/add-company';
import { EditCompanyDetailsPage } from '../pages/edit-company-details/edit-company-details';
import { EditStudentDetailsPage } from '../pages/edit-student-details/edit-student-details';
import { AppSettingsProvider } from '../providers/app-settings/app-settings';
import { UserServiceProvider } from '../providers/user-service/user-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UserListPage,
    CompanyListPage,
    EditUserPage,
    EditCompanyPage,
    RegistrationsPage,
    RegisterStudentPage,
    AddStudentPage,
    EditStudentDetailsPage,
    AddCompanyPage,
    EditCompanyDetailsPage
  ],
  imports: [
    HttpClientModule,
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
    RegisterStudentPage,
    AddStudentPage,
    EditStudentDetailsPage,
    AddCompanyPage,
    EditCompanyDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppSettingsProvider,
    UserServiceProvider
  ]
})
export class AppModule {}
