import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaMaterialPage } from './lista-material';

@NgModule({
  declarations: [
    ListaMaterialPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaMaterialPage),
  ],
})
export class ListaMaterialPageModule {}
