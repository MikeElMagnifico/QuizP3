import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResenaPage } from '../resena/resena';
import { CarroPage } from '../carro/carro';
import { InicioPage } from '../inicio/inicio';

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
  res = ResenaPage;
  carrito = CarroPage;
  inicio = InicioPage;
  
  foto = "";
  nombre = "";
  // vendedor = "";
  precio = "";
  // valoracion = [];
  // fecha = "";
  // user = "";
  // avatar ="";
  // fechar = "";
  // resenar = "";
  producto = [];
  carro = []
  usuarios = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.producto = this.navParams.get('producto');
    this.usuarios = this.navParams.get('usuarios');
    this.carro = this.navParams.get('carro');
    this.nombre = this.navParams.get('producto').nombre;
    this.foto = this.navParams.get('producto').fotop;
    // this.vendedor = this.navParams.get('producto').vendedor;
    this.precio = this.navParams.get('producto').precio;
    // this.valoracion = this.navParams.get('producto').valoracion;
    // this.fecha = this.navParams.get('producto').fechap;
    // this.avatar = this.navParams.get('producto').avatar;
    // this.user = this.navParams.get('producto').user;
    // this.fechar = this.navParams.get('producto').fechar;
    // this.resenar = this.navParams.get('producto').resena;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductoPage');
  }
  AgregarCarrito(){
    this.carro.push({nombre: this.nombre, foto: this.foto, costo: this.precio});
    this.navCtrl.pop();
  }
  Regresar(){
    this.navCtrl.pop()
  }
}
