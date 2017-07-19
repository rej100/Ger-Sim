import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core'
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Content } from 'ionic-angular';
import { ChangeDetectionStrategy } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { App } from 'ionic-angular';

import { MainService } from "../../services/main.service";
import { HomePage } from '../home/home';
import { WurstStore } from '../wurstStore/wurstStore';
import { CashStore } from '../cashStore/cashStore';
import { Info } from '../info/info';

@Component
({
  selector: 'page-unlock',
  templateUrl: 'unlock.html'
})
export class Unlock
{
  @ViewChild(Content) content: Content;

  homePage:any = HomePage;
  wurstStore:any = WurstStore;
  cashStore:any = CashStore;
  unlock:any = Unlock;
  info:any = Info;

  constructor(public appCtrl: App, private changeDetector: ChangeDetectorRef, public alertCtrl: AlertController, public navCtrl: NavController, public mainService: MainService)
  {
  }


}
