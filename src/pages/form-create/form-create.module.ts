import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormCreatePage } from './form-create';

@NgModule({
  declarations: [
    FormCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(FormCreatePage),
  ],
})
export class FormCreatePageModule {}
