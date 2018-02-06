import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClienteRmPage } from './cliente-rm';

@NgModule({
  declarations: [
    ClienteRmPage,
  ],
  imports: [
    IonicPageModule.forChild(ClienteRmPage),
  ],
})
export class ClienteRmPageModule {}
