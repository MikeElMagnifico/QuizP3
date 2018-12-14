import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { RegistrarPage } from '../registrar/registrar';
import {Storage} from '@ionic/storage';
import { InicioPage } from '../inicio/inicio';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  reg = RegistrarPage;
  ini = InicioPage;
  correo = "";
  con = "";
  usuarios=[{con: "" , correo: "", carrote: []}, ];
  
 
  constructor(public navCtrl: NavController, public alertCtrl: AlertController,public storage:Storage) {
          this.storage.keys()
          .then(keys =>{
            console.log(keys);
            if(keys.some(key => key == 'usuarios')){
             this.storage.get('usuarios')
              .then(usuarios =>{
               this.usuarios = JSON.parse(usuarios);
                console.log(usuarios)
             });
            }
          });
    //this.storage.clear();
  }
  Log()
  {
    let index = this.usuarios.findIndex(u => u.correo == this.correo);
    let index2 = this.usuarios.findIndex(p => p.con == this.con);
    if(this.correo.length>0 || this.con.length>=8){
      if(index == index2)
      {
      this.navCtrl.push(this.ini, {Carrou: this.usuarios[index].carrote, Usus: this.usuarios});
      console.log(this.usuarios)
      }
      else
      {
        const alert2 = this.alertCtrl.create({
          title: 'Log in fallido',
          buttons: ['OK']
        });
        alert2.present();
      }
    this.correo = "";
    this.con = "";
    }
    else{
      const alert3 = this.alertCtrl.create({
        title: 'Log in fallido',
        buttons: ['OK']
      });
      alert3.present();
    }
  }
  Reg()
  {
    this.navCtrl.push(this.reg, {usuarios: this.usuarios});
  }
}
