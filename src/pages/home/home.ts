import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core'
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Content } from 'ionic-angular';
import { ChangeDetectionStrategy } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { App } from 'ionic-angular';

import { MainService } from "../../services/main.service";
import { WurstStore } from '../wurstStore/wurstStore';

@Component
({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage
{
  @ViewChild(Content) content: Content;

  wurstStore:any = WurstStore;
  homePage:any = HomePage;

  constructor(public appCtrl: App, private changeDetector: ChangeDetectorRef, public alertCtrl: AlertController, public navCtrl: NavController, public mainService: MainService)
  {
  }

  ShowAlert()
  {
    let alert = this.alertCtrl.create
    ({
      title: 'New Friend!',
      subTitle: "",
      buttons: ['OK']
    });
    alert.present();
  }
  WurstClick()
  {
    this.mainService.wurstAmount += this.mainService.wurstPower;
  }

}
