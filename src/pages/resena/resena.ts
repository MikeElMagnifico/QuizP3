import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResenaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resena',
  templateUrl: 'resena.html',
})
export class ResenaPage {
  avatar = "";
  usuario = "";
  review = "";
  fecha = "";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.avatar = this.navParams.get('Resena').avatar;
    this.usuario = this.navParams.get('Resena').user;
    this.review = this.navParams.get('Resena').resena;
    this.fecha = this.navParams.get('Resena').fechar;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResenaPage');
  }

}
