import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core'
import { NavController } from 'ionic-angular';
import { MainService } from "../../services/main.service";
import { AlertController } from 'ionic-angular';
import { Content } from 'ionic-angular';
import { ChangeDetectionStrategy } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { App } from 'ionic-angular';

import { HomePage } from '..//home/home';

@Component
({
  selector: 'page-wurstStore',
  templateUrl: 'wurstStore.html'
})
export class WurstStore
{

  wurstStore:any = WurstStore;
  homePage:any = HomePage;

  constructor(public appCtrl: App, private changeDetector: ChangeDetectorRef, public alertCtrl: AlertController, public navCtrl: NavController, public mainService: MainService)
  {

  }

}
