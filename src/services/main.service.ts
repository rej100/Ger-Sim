import { Injectable } from "@angular/core";
import { App } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { WurstStore } from '../pages/wurstStore/wurstStore';

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
      this.WurstIncomeThread();
    }

    ChangeRoot(root:any)
    {
      this.appCtrl.getRootNav().setRoot(root);
    }

    Test()
    {
      location.reload();
    }
    Reload()
    {
      location.reload();
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

    WurstIncomeThread = () =>
    {
      //console.log(this.wurstAmount);
      //console.log(this.wurstPassivePower);
      this.wurstAmount += this.wurstPassivePower;
      setTimeout(this.WurstIncomeThread, 1000);
    }
    SaveThread = () =>
    {
      this.Save();
      setTimeout(this.SaveThread, 2000);
    }
}
