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

  customPassiveEffect:string;

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
    this.customPassiveEffect = "ud";
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
iRod.id = 0;
iRod.name = "test";
iRod.baseCost = 20;
iRod.baseCost = 4;
iRod.wurstPassiveBonus = 0.2;
iRod.customPassiveEffect = "eTest";

let iTest:GeItem = new GeItem();
iTest.id = 0;
iTest.name = "testTwo";
iTest.baseCost = 20;
iTest.baseCost = 4;
iTest.wurstPassiveBonus = 0.2;
iTest.customPassiveEffect = "eTestTwo";

let iItems:GeItem[];
let itemNum:number = 2;
iItems = [iRod, iTest];

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
      this.ItemThread();
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

    ItemThread = () =>
    {
      var helperWurstPower = 0;
      var helperCashPower = 0;
      for(var i = 0; i < itemNum; ++i)
      {
        console.log(iItems[i].lvl);
        if(iItems[i].lvl > 0)
        {
          helperWurstPower += iItems[i].wurstPassiveBonus;
          helperCashPower += iItems[i].cashPassiveBonus;
        }
      }
      this.wurstPassivePower = helperWurstPower;
      this.cashPassivePower = helperWurstPower;
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
