import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { RegistrarPage } from '../registrar/registrar';
import {Storage} from '@ionic/storage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  reg = RegistrarPage;
  usu = "";
  con = "";
  usuarios=[{ usu: "", con: ""
  }];
  

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,public storage:Storage) {
    this.storage.keys()
    .then(keys =>{
      console.log(keys);
      if(keys.some(key => key == 'usuarios')){
        this.storage.get('usuarios')
        .then(usuarios =>{
          this.usuarios = JSON.parse(usuarios);
        });
      }
    });
  }
  Log()
  {
    let index = this.usuarios.findIndex(u => u.usu == this.usu);
    let index2 = this.usuarios.findIndex(p => p.con == this.con);
    
      if(index == index2)
      {
        
        const alert = this.alertCtrl.create({
        title: 'Log in exitoso',
        buttons: ['OK']
      });
      alert.present();

      }
      else
      {
        const alert2 = this.alertCtrl.create({
          title: 'Log in fallido',
          buttons: ['OK']
        });
        alert2.present();

      }
    this.usu = "";
    this.con = "";
  }
  Reg()
  {
    this.navCtrl.push(this.reg, {usuarios: this.usuarios});
  }
}
