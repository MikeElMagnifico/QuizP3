import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductoPage } from '../producto/producto';
import { CarroPage } from '../carro/carro';
import {Storage} from '@ionic/storage'

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {
  pr = ProductoPage;
  carrito = CarroPage;
  carro = [];
  carros = [];
  usuarios = [];
  carrou = [];
  
  
  
  productos = [
    {id: 0, 
    nombre: "Calvin Klein - Chamarra de plumón Acolchado Negra", 
    fotop: "../assets/M1.jpg",
    precio: "$1,715.56",
    vendedor:"Pau Castellanos", 
    valoracion: [1,2,3,4,5],
    user: "Andrea López",
    avatar: "../assets/Avatar.png",
    fechar: "2018-12-04",
    resena: "Hermosa Chamarra!",
    fechap: "2018-11-30",
    disponibles: "10",
   },
   {id: 1, 
    nombre: "Terez Slash - Jersey para mujer", 
    fotop: "../assets/M2.jpg",
    precio: "$2,569.23",
    vendedor:"Pau Castellanos", 
    valoracion: [1,2,3,4,5],
    user: "Ivanna Rodríguez",
    avatar: "../assets/Avatar.png",
    fechar: "2018-12-04",
    resena: "Excelente calidad",
    fechap: "2018-11-30",
    disponibles: "15",
   },
   {id: 2, 
    nombre: "Botas Calvin Klein para Mujer", 
    fotop: "../assets/M3.jpg",
    precio: "$3,999",
    vendedor:"Pau Castellanos", 
    valoracion: [1,2,3,4,5],
    user: "Mariel García",
    avatar: "../assets/Avatar.png",
    fechar: "2018-12-04",
    resena: "El terciopelo es muy suave!",
    fechap: "2018-11-30",
    disponibles: "2",
   },
   {id: 3, 
    nombre: "Steve Madden Carrson 955 Zapatillas para mujer", 
    fotop: "../assets/M4.jpg",
    precio: "$1,809.61",
    vendedor:"Pau Castellanos", 
    valoracion: [1,2,3,4,5],
    user: "Marcela Basteri",
    avatar: "../assets/Avatar.png",
    fechar: "2018-12-04",
    resena: "Son muy cómodos",
    fechap: "2018-11-30",
    disponibles: "5",
   },
   {id: 4, 
    nombre: "BCBGeneration Loose Vestido", 
    fotop: "../assets/M5.jpg",
    precio: "$1,703.01",
    vendedor:"Pau Castellanos", 
    valoracion: [1,2,3,4,5],
    user: "Mónica Gallardo",
    avatar: "../assets/Avatar.png",
    fechar: "2018-12-04",
    resena: "El color es ideal para la estación",
    fechap: "2018-11-30",
    disponibles: "7",
   },
   {id: 5, 
    nombre: "Calvin Klein Blusa para mujer", 
    fotop: "../assets/M6.jpg",
    precio: "$1,299",
    vendedor:"Mich Castellanos", 
    valoracion: [1,2,3,4,5],
    user: "Valria Paredes",
    avatar: "../assets/Avatar.png",
    fechar: "2018-12-04",
    resena: "Una tela de excelente calidad",
    fechap: "2018-11-30",
    disponibles: "9",
   },
   {id: 6, 
    nombre: "Adidas Superstar", 
    fotop: "../assets/M7.jpg",
    precio: "$1,633.22",
    vendedor:"Mich Castellanos", 
    valoracion: [1,2,3,4,5],
    user: "Rachel Green",
    avatar: "../assets/Avatar.png",
    fechar: "2018-12-04",
    resena: "Perfecto para cualquier ocasión",
    fechap: "2018-11-30",
    disponibles: "11",
   },
   {id: 7, 
    nombre: "Vigoss Moto Classic - Chamarra de Piel Sintética para mujer", 
    fotop: "../assets/M8.jpg",
    precio: "$1,966.52",
    vendedor:"Mich Castellanos", 
    valoracion: [1,2,3,4,5],
    user: "Vanessa Hudgens",
    avatar: "../assets/Avatar.png",
    fechar: "2018-12-04",
    resena: "Ni parece que es piel sintética!",
    fechap: "2018-11-30",
    disponibles: "15",
   },
   {id: 8, 
    nombre: "MOLERANI Causal Plain Loose Vestido", 
    fotop: "../assets/M9.jpg",
    precio: "$844.87",
    vendedor:"Mich Castellanos", 
    valoracion: [1,2,3,4,5],
    user: "Ximena Navarrete",
    avatar: "../assets/Avatar.png",
    fechar: "2018-12-04",
    resena: "Es súper casual y bonito",
    fechap: "2018-11-30",
    disponibles: "17",
   },
   {id: 9, 
    nombre: "ROMWE Women’s Tunic Swing T-shirt Dress", 
    fotop: "../assets/M10.jpg",
    precio: "$596",
    vendedor:"Mich Castellanos", 
    valoracion: [1,2,3,4,5],
    user: "Sofía Muñoz",
    avatar: "../assets/Avatar.png",
    fechar: "2018-12-04",
    resena: "Colores muy bonitos",
    fechap: "2018-11-30",
    disponibles: "8",
   },
   {id: 10, 
    nombre: "Puma RS-X Reinvention", 
    fotop: "../assets/H1.jpg",
    precio: "$2,599",
    vendedor:"Miguel Méndez", 
    valoracion: [1,2,3,4,5],
    user: "Roberto Pérez",
    avatar: "../assets/Avatar.png",
    fechar: "2018-12-05",
    resena: "Muy buenos tennis, excelente calidad",
    fechap: "2018-11-30",
    disponibles: "5",
   },
   {id: 11, 
    nombre: "Puma Cell Endura OG", 
    fotop: "../assets/H2.jpg",
    precio: "$2,799",
    vendedor:"Miguel Méndez", 
    valoracion: [1,2,3,4,5],
    user: "Goku",
    avatar: "../assets/Avatar.png",
    fechar: "2018-12-01",
    resena: "Tennis muy cómodos y padres",
    fechap: "2018-11-30",
    disponibles: "10",
   },
   {id: 12, 
    nombre: "Dragon Ball Z x Adidas Ultra Tech ‘Vegeta’", 
    fotop: "../assets/H3.jpg",
    precio: "$3,799",
    vendedor:"Miguel Méndez", 
    valoracion: [1,2,3,4,5],
    user: "Bryan Navarro",
    avatar: "../assets/Avatar.png",
    fechar: "2018-11-30",
    resena: "Buenos tennis y más si te gusta Dragon Ball",
    fechap: "2018-11-18",
    disponibles: "2",
   },
   {id: 13, 
    nombre: "Prophere Trace", 
    fotop: "../assets/H4.jpg",
    precio: "$2,999",
    vendedor:"Miguel Méndez", 
    valoracion: [1,2,3,4,5],
    user: "Paulina Pérez",
    avatar: "../assets/Avatar.png",
    fechar: "2018-11-30",
    resena: "Buen Producto",
    fechap: "2018-11-24",
    disponibles: "5",
   },
   {id: 14, 
    nombre: "Nike Air Force 1 ‘07", 
    fotop: "../assets/H5.jpg",
    precio: "$1,799",
    vendedor:"Miguel Méndez", 
    valoracion: [1,2,3,4,5],
    user: "Javier Sánchez",
    avatar: "../assets/Avatar.png",
    fechar: "2018-12-05",
    resena: "Buen precio por los tennis",
    fechap: "2018-11-21",
    disponibles: "10",
   },
   {id: 15, 
    nombre: "Nike Vandal High Supreme QS", 
    fotop: "../assets/H6.jpg",
    precio: "$1,799",
    vendedor:"Carlos Santana", 
    valoracion: [1,2,3,4,5],
    user: "Erika Carsa",
    avatar: "../assets/Avatar.png",
    fechar: "2018-12-07",
    resena: "Sí los vuelvo a comprar",
    fechap: "2018-11-23",
    disponibles: "13",
   },
   {id: 16, 
    nombre: "Reebok Aztrek “White”", 
    fotop: "../assets/H7.jpg",
    precio: "$1,899",
    vendedor:"Carlos Santana", 
    valoracion: [1,2,3,4,5],
    user: "Sndra Rosa",
    avatar: "../assets/Avatar.png",
    fechar: "2018-11-30",
    resena: "Muy buen par de tennis",
    fechap: "2018-11-12",
    disponibles: "9",
   },
   {id: 17, 
    nombre: "Club C 85 Pro MCCE Reebok x Montana Cans", 
    fotop: "../assets/H8.jpg",
    precio: "$2,299",
    vendedor:"Carlos Santana", 
    valoracion: [1,2,3,4,5],
    user: "Alejandro Fernández",
    avatar: "../assets/Avatar.png",
    fechar: "2018-12-01",
    resena: "Me gustaron",
    fechap: "2018-11-27",
    disponibles: "20",
   },
   {id: 18, 
    nombre: "Vans Vault OG Style 238 LX", 
    fotop: "../assets/H9.jpg",
    precio: "$1,799",
    vendedor:"Carlos Santana", 
    valoracion: [1,2,3,4,5],
    user: "Monica Galindo",
    avatar: "../assets/Avatar.png",
    fechar: "2018-12-03",
    resena: "Están muy cómodos",
    fechap: "2018-11-30",
    disponibles: "10",
   },
   {id: 19, 
    nombre: "AUTHENTIC ONE PIECE LX", 
    fotop: "../assets/H10.jpg",
    precio: "$2,099",
    vendedor:"Carlos Santana", 
    valoracion: [1,2,3,4,5],
    user: "Papa Francisco",
    avatar: "../assets/Avatar.png",
    fechar: "2018-12-01",
    resena: "Los mejores del mundo",
    fechap: "2018-11-20",
    disponibles: "3",
   },
   
  
  ]
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.carrou = this.navParams.get('Carrou');
  
    this.usuarios = this.navParams.get('Usus');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }
  ClickProducto(id){
    this.navCtrl.push(this.pr, {producto: id, carro: this.carrou, usuarios: this.usuarios})
  }
  VerCarrito(){
    this.navCtrl.push(this.carrito, {carro: this.carrou});
    
  }
}
 