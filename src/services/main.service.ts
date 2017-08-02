import { Injectable } from "@angular/core";
import { App } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { WurstStore } from '../pages/wurstStore/wurstStore';

//
//You migh wanna use the "collapse brackets" fucntion of your editor here.
//

class GeItem
{
  id:number;
  name:string;
  lvl:number;
  baseCost:number;
  cost:number;
  wurstPassiveBonus:number;
  wurstPassiveModifier:number;
  cashPassiveBonus:number;
  cashPassiveModifier:number;

  ImmediateEffect:any;
  CustomPassiveEffect:any;

  constructor()
  {
    this.id = null;
    this.name = "ud";
    this.lvl = 0;
    this.baseCost = 0;
    this.cost = this.baseCost;
    this.wurstPassiveBonus = 0;
    this.wurstPassiveModifier = 0;
    this.cashPassiveBonus = 0;
    this.cashPassiveModifier = 0;
    this.ImmediateEffect = function() {};
    this.CustomPassiveEffect = function() {};
  }

  UpdateCost()
  {
    this.cost = this.baseCost;
    for(var i = 0; i < this.lvl; i++)
    {
      this.cost *= 1.5;
    }
  }

  Save()
  {
    localStorage.setItem(this.name + "lvl", this.lvl.toString());
  }
  Load()
  {
    this.lvl = Number(localStorage.getItem(this.name + "lvl"));
  }
};

//Item declarations:

let iRod:GeItem = new GeItem();
iRod.baseCost = 20;
let iItems:GeItem[] = [iRod];

@Injectable()
export class MainService
{
    test:number;

    firstRun:boolean;

    wurstPower:number;
    wurstPassivePower:number;
    wurstAmount:number;

    cashAmount:number;
    cashPassivePower:number;
    cashWurstCost:number;

    currentTab:number;

    constructor(public appCtrl: App)
    {
      this.test = 69;

      this.currentTab = 0;

      this.wurstPower = 1;
      this.wurstPassivePower = 0;
      this.wurstAmount = 0;

      this.cashAmount = 0;
      this.cashPassivePower = 0;
      this.cashWurstCost = 2000;

      if(localStorage.getItem("firstRun") === null)
      {
        this.firstRun = true;
      }
      else
      {
        this.firstRun = false;
      }

      if(!this.firstRun)
      {
        this.LoadSave();
      }
      this.SaveThread();
      this.IncomeThread();
    }

    ChangeRoot(root:any)
    {
      this.appCtrl.getRootNav().setRoot(root);
    }

    Save()
    {
      localStorage.setItem("firstRun", false.toString());

      localStorage.setItem("wurstAmount", this.wurstAmount.toString());
      localStorage.setItem("wurstPassivePower", this.wurstPassivePower.toString());
      localStorage.setItem("wurstPower", this.wurstPower.toString());

      localStorage.setItem("cashAmount", this.cashAmount.toString());
      localStorage.setItem("cashPassivePower", this.cashPassivePower.toString());
      localStorage.setItem("cashWurstCost", this.cashWurstCost.toString());
    }
    LoadSave()
    {
      this.wurstAmount = Number(localStorage.getItem("wurstAmount"));
      this.wurstPassivePower = Number(localStorage.getItem("wurstPassivePower"));
      this.wurstPower = Number(localStorage.getItem("wurstPower"));

      this.cashAmount = Number(localStorage.getItem("cashAmount"));
      this.cashPassivePower = Number(localStorage.getItem("cashPassivePower"));
      this.cashWurstCost = Number(localStorage.getItem("cashWurstCost"));
    }

    IncomeThread = () =>
    {
      //console.log(this.wurstAmount);
      //console.log(this.wurstPassivePower);
      this.cashAmount += this.cashPassivePower;
      this.wurstAmount += this.wurstPassivePower;
      setTimeout(this.IncomeThread, 1000);
    }
    SaveThread = () =>
    {
      this.Save();
      setTimeout(this.SaveThread, 2000);
    }
}
