import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistrationsPage } from './registrations';

@NgModule({
  declarations: [
    RegistrationsPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistrationsPage),
  ],
})
export class RegistrationsPageModule {}
