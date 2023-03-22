import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { SleepService } from '../services/sleep.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-sleepiness',
  templateUrl: './sleepiness.component.html',
  styleUrls: ['./sleepiness.component.scss'],
})
export class SleepinessComponent implements OnInit, OnDestroy {
  scaleArray: string[]
  inputValue: number = undefined;
  faCoffee = faCoffee;
  @ViewChild('popover') popover;
  isOpen = false; 
  turnOffPopOver: any; 
  constructor(private sleepService: SleepService, public actionSheetController: ActionSheetController ) { 
    // 
  }
ngOnDestroy(): void{
  this.turnOffPopOver.clearTimeout(); 
}
  ngOnInit() {
    this.scaleArray = StanfordSleepinessData.ScaleValues;
    this.scaleArray.shift(); 
    console.log(this.scaleArray);
    // this.sleepService.logSleepinessData(new StanfordSleepinessData(5, new Date(2022,10,20,8,10,5))); 
    // this.sleepService.logSleepinessData(new StanfordSleepinessData(2, new Date(2022,10,20,6,10,5)));
    // this.sleepService.logSleepinessData(new StanfordSleepinessData(4, new Date(2022,10,21,8,10,5))); 
    // this.sleepService.logSleepinessData(new StanfordSleepinessData(6, new Date(2022,10,21,6,10,5)));
    // this.sleepService.logSleepinessData(new StanfordSleepinessData(3, new Date(2022,10,23,8,10,5))); 
    // this.sleepService.logSleepinessData(new StanfordSleepinessData(1, new Date(2022,10,23,6,10,5)));
    // this.sleepService.logSleepinessData(new StanfordSleepinessData(3, new Date(2022,10,25,8,10,5))); 
    // this.sleepService.logSleepinessData(new StanfordSleepinessData(1, new Date(2022,10,25,6,10,5)));
    // this.sleepService.logSleepinessData(new StanfordSleepinessData(6, new Date(2022,10,25,6,10,5)));
    // this.sleepService.logSleepinessData(new StanfordSleepinessData(3, new Date(2022,10,22,8,10,5))); 
    // this.sleepService.logSleepinessData(new StanfordSleepinessData(1, new Date(2022,10,22,6,10,5)));
    // this.sleepService.logSleepinessData(new StanfordSleepinessData(4, new Date(2022,10,22,6,10,5)));
    // this.sleepService.logSleepinessData(new StanfordSleepinessData(7, new Date(2022,10,22,8,10,5))); 
    
  }

  selectSleepiness(){
    console.log(this.inputValue); 
    this.sleepService.logSleepinessData(new StanfordSleepinessData(this.inputValue+1, new Date()))
    this.isOpen = true; 
  
  this.turnOffPopOver = setTimeout(() => {
    this.isOpen = false; 
    
  }, 1000);
  
  }
}
