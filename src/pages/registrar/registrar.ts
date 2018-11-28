import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the RegistrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {
  usu = "";
  pass = "";
  usuarios=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.usuarios = this.navParams.get('usuarios')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarPage');
  }
  registrar()
  {
    if(this.pass.length>=8 && this.usu.length>0)
    {
      this.usuarios.push(
        {
          usu: this.usu,
          con: this.pass

        }
      )
      this.navCtrl.pop()
    }
    else
    {
      const alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Usuario vació o contraseña menor a 8 caracteres',
        buttons: ['OK']
      })
      alert.present();
    }
  }
}
