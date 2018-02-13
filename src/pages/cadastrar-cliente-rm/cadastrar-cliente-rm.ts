import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cadastrar-cliente-rm',
  templateUrl: 'cadastrar-cliente-rm.html',
})
export class CadastrarClienteRmPage {

  dados = {}
  cadastrarClientRm() {
    console.log(this.dados)
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarClienteRmPage');
  }

}
