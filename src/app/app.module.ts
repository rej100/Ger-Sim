import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MainService } from "../services/main.service";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WurstStore } from '../pages/wurstStore/wurstStore';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WurstStore
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WurstStore
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MainService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
