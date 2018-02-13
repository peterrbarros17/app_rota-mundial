import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CadastrarClienteRmPage } from '../pages/cadastrar-cliente-rm/cadastrar-cliente-rm';
import { CadastrarMaterialPage } from '../pages/cadastrar-material/cadastrar-material';
import { CadastrarfaturaPage } from '../pages/cadastrarfatura/cadastrarfatura';
import { ClienteRmPage } from '../pages/cliente-rm/cliente-rm';
import { ContaAPagarPage } from '../pages/conta-a-pagar/conta-a-pagar';
import { CopiafaturaPage } from '../pages/copiafatura/copiafatura';
import { DocumentosRmPage } from '../pages/documentos-rm/documentos-rm';
import { FaturaPage } from '../pages/fatura/fatura';
import { ListaMaterialPage } from '../pages/lista-material/lista-material';
import { ModfaturaPage } from '../pages/modfatura/modfatura';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CadastrarClienteRmPage,
    CadastrarMaterialPage,
    CadastrarfaturaPage,
    ClienteRmPage,
    ContaAPagarPage,
    CopiafaturaPage,
    DocumentosRmPage,
    FaturaPage,
    ListaMaterialPage,
    ModfaturaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadastrarClienteRmPage,
    CadastrarMaterialPage,
    CadastrarfaturaPage,
    ClienteRmPage,
    ContaAPagarPage,
    CopiafaturaPage,
    DocumentosRmPage,
    FaturaPage,
    ListaMaterialPage,
    ModfaturaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
