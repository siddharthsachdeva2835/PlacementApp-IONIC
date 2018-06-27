import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditStudentDetailsPage } from './edit-student-details';

@NgModule({
  declarations: [
    EditStudentDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(EditStudentDetailsPage),
  ],
})
export class EditStudentDetailsPageModule {}
