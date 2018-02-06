import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarMaterialPage } from './cadastrar-material';

@NgModule({
  declarations: [
    CadastrarMaterialPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarMaterialPage),
  ],
})
export class CadastrarMaterialPageModule {}
