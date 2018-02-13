import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

/**
 * Generated class for the CadastrarMaterialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastrar-material',
  templateUrl: 'cadastrar-material.html',
})
export class CadastrarMaterialPage {
  
  dados = {}
  cadastrarMaterial() {
    console.log(this.dados)
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarMaterialPage');
  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Mensagem',
      subTitle: 'Item Adicionado',
      buttons: ['OK']
    });
    alert.present();
  }
}
