import { Injectable } from "@angular/core";
import { SleepData } from "../data/sleep-data";
import { OvernightSleepData } from "../data/overnight-sleep-data";
import { StanfordSleepinessData } from "../data/stanford-sleepiness-data";

const storage = window.localStorage;
@Injectable({
  providedIn: "root",
})
export class SleepService {
  private static LoadDefaultData: boolean = true;
  public static AllSleepData: SleepData[] = [];
  public static AllOvernightData: OvernightSleepData[] = [];
  public static AllSleepinessData: StanfordSleepinessData[] = [];

  constructor() {
    // 	if(SleepService.LoadDefaultData) {
    // 		this.addDefaultData();
    // 	SleepService.LoadDefaultData = false;
    // }
  }

  // private addDefaultData() {
  // 	this.logOvernightData(new OvernightSleepData(new Date('February 18, 2021 01:03:00'), new Date('February 18, 2021 09:25:00')));
  // 	this.logSleepinessData(new StanfordSleepinessData(4, new Date('February 19, 2021 14:38:00')));
  // 	this.logOvernightData(new OvernightSleepData(new Date('February 20, 2021 23:11:00'), new Date('February 21, 2021 08:03:00')));
  // }

  public logOvernightData(sleepData: OvernightSleepData) {
    SleepService.AllSleepData.push(sleepData);
    SleepService.AllOvernightData.push(sleepData);
    this.addSleepDataToStorage("sleepData", sleepData);
  }

  public logSleepinessData(sleepData: StanfordSleepinessData) {
    SleepService.AllSleepData.push(sleepData);
    SleepService.AllSleepinessData.push(sleepData);
	this.addSleepinessDataToStorage("standordSleepinessData", sleepData); 

  }

  private addSleepDataToStorage(key: string, value: any) {
    let storageValue: any;
    if (storage.getItem(key)) {
    
      storageValue = storage.getItem(key);
      storageValue = JSON.parse(storageValue);
      if (storageValue[value.sleepEnd.toLocaleDateString()]){
        storageValue[value.sleepEnd.toLocaleDateString()] +=  value.getHours();
      } else{
        storageValue[value.sleepEnd.toLocaleDateString()] =  value.getHours();
      }
      storage.setItem(key, JSON.stringify(storageValue));
      return;
    }

    const newStorage = {};
    newStorage[value.sleepEnd.toLocaleDateString()] = value.getHours();
    storage.setItem(key, JSON.stringify(newStorage));
  }

  private addSleepinessDataToStorage(key: string, value: any){
	let storageValue: any;
	console.log(1)
    if (storage.getItem(key)) {
    
      storageValue = storage.getItem(key);
      storageValue = JSON.parse(storageValue);
      
      storageValue[value.loggedAt.toString()] = value.loggedValue;
      storage.setItem(key, JSON.stringify(storageValue));
      return;
    }

    const newStorage = {};
    newStorage[value.loggedAt.toString()] = value.loggedValue;
    storage.setItem(key, JSON.stringify(newStorage));
  }
  
}
