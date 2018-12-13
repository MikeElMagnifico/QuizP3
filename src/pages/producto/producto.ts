import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage} from '@ionic/storage';

/**
 * Generated class for the ProductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-producto',
  templateUrl: 'producto.html',
})
export class ProductoPage {
  producto = '';
  carro = [];
  usuarios = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.producto = this.navParams.get('producto');
    this.carro = this.navParams.get('carro');
    this.usuarios = this.navParams.get('usuarios')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductoPage');
  }
  AgregarCarrito(){
    this.carro.push(this.producto);
    this.storage.set('usuarios', JSON.stringify(this.usuarios));
   
    this.navCtrl.pop();
  }
  Regresar(){
    this.navCtrl.pop()
  }
}
