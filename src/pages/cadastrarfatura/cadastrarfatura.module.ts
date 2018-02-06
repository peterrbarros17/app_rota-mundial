import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarfaturaPage } from './cadastrarfatura';

@NgModule({
  declarations: [
    CadastrarfaturaPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarfaturaPage),
  ],
})
export class CadastrarfaturaPageModule {}
