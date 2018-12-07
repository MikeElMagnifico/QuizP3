import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegistrarPage } from '../pages/registrar/registrar';
import { IonicStorageModule } from '@ionic/storage';
import { InicioPage } from '../pages/inicio/inicio';
import { ProductoPage } from '../pages/producto/producto';
import { ResenaPage } from '../pages/resena/resena';
import { CarroPage } from '../pages/carro/carro';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistrarPage,
    InicioPage,
    ProductoPage,
    ResenaPage,
    CarroPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegistrarPage,
    InicioPage,
    ProductoPage,
    ResenaPage,
    CarroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
