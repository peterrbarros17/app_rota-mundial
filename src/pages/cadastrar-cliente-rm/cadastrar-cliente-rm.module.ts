import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarClienteRmPage } from './cadastrar-cliente-rm';

@NgModule({
  declarations: [
    CadastrarClienteRmPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarClienteRmPage),
  ],
})
export class CadastrarClienteRmPageModule {}
