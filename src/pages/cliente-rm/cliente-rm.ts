import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
/**
 * Generated class for the ClienteRmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cliente-rm',
  templateUrl: 'cliente-rm.html',
})
export class ClienteRmPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClienteRmPage');
  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Mensagem',
      subTitle: 'Você está logado',
      buttons: ['OK']
    });
    alert.present();
  }

}
