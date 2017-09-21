import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core'
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Content } from 'ionic-angular';
import { ChangeDetectionStrategy } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { App } from 'ionic-angular';

import { MainService } from "../../services/main.service";
import { HomePage } from '../home/home';
import { CashStore } from '../cashStore/cashStore';
import { Unlock } from '../unlock/unlock';
import { Info } from '../info/info';

@Component
({
  selector: 'page-wurstStore',
  templateUrl: 'wurstStore.html'
})
export class WurstStore
{

  homePage:any = HomePage;
  wurstStore:any = WurstStore;
  cashStore:any = CashStore;
  unlock:any = Unlock;
  info:any = Info;

  constructor(public appCtrl: App, private changeDetector: ChangeDetectorRef, public alertCtrl: AlertController, public navCtrl: NavController, public mainService: MainService)
  {

  }

  HandleArrow(amount:number, id:string)
  {
    //currentAmount:number = Number(document.getElementById(id).innerHTML);
    var currentAmount = Number(document.getElementById(id).innerHTML);
    currentAmount += amount;
    if(currentAmount < 0)
      currentAmount = 0;
    document.getElementById(id).innerHTML = currentAmount.toString();
  }
  HandleBuy()
  {
    var iRodAmount = Number(document.getElementById("iRodINum").innerHTML);
    console.log(iRodAmount);
  }

}
