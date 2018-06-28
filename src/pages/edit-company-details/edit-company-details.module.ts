import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditCompanyDetailsPage } from './edit-company-details';

@NgModule({
  declarations: [
    EditCompanyDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(EditCompanyDetailsPage),
  ],
})
export class EditCompanyDetailsPageModule {}
