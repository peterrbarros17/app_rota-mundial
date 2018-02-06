import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CadastrarMaterialPage } from '../pages/cadastrar-material/cadastrar-material';
import { CadastrarClienteRmPage } from '../pages/cadastrar-cliente-rm/cadastrar-cliente-rm';
import { CadastrarfaturaPage } from '../pages/cadastrarfatura/cadastrarfatura';
import { ClienteRmPage } from '../pages/cliente-rm/cliente-rm';
import { ContaAPagarPage } from '../pages/conta-a-pagar/conta-a-pagar';
import { CopiafaturaPage } from '../pages/copiafatura/copiafatura';
import { DocumentosRmPage } from '../pages/documentos-rm/documentos-rm';
import { FaturaPage } from '../pages/fatura/fatura';
import { ListaMaterialPage } from '../pages/lista-material/lista-material';
import { ModfaturaPage } from '../pages/modfatura/modfatura';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Cadastrar Material', component: CadastrarMaterialPage},
      { title: 'Cadastrar Cliente Rm', component: CadastrarClienteRmPage},
      { title: 'Cadastrar Fatura', component: CadastrarfaturaPage},
      { title: 'Cliente Rm', component: ClienteRmPage},
      { title: 'Conta A Pagar', component: ContaAPagarPage},
      { title: 'Copia Fatura', component: CopiafaturaPage},
      { title: 'Documentos Rm', component: DocumentosRmPage},
      { title: 'Fatura', component: FaturaPage},
      { title: 'Lista Material', component: ListaMaterialPage},
      { title: 'Modelo Fatura', component: ModfaturaPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
