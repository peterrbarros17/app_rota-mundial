import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DocumentosRmPage } from './documentos-rm';

@NgModule({
  declarations: [
    DocumentosRmPage,
  ],
  imports: [
    IonicPageModule.forChild(DocumentosRmPage),
  ],
})
export class DocumentosRmPageModule {}
