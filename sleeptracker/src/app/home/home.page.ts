import { Component, OnDestroy, ViewChild } from "@angular/core";
import { SleepService } from "../services/sleep.service";
import { SleepData } from "../data/sleep-data";
import { OvernightSleepData } from "../data/overnight-sleep-data";
import { StanfordSleepinessData } from "../data/stanford-sleepiness-data";
import { ActionSheetController } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnDestroy {
  startTimeInput: any;
  endTimeInput: any;
  displayStartTime: string;
  displayEndTime: string;
  currentDate: Date;
  currentTime: number;
  currentMinute: string;
  displayTime: string;
  sleepStart: boolean = false;
  currentSecond: string;
  private sleepStartTime: Date;
  private sleepEndTime: Date;
  private sencondInterval: any = setInterval(this.getTime.bind(this), 1000);
  presentingElement = undefined;
  presentManualModel = undefined;
  isOpen: boolean = false;
  warningMessage: string;
  constructor(
    public sleepService: SleepService,
    private actionSheetCtrl: ActionSheetController
  ) {}
  ngOnDestroy(): void {
    this.sencondInterval.clearInterval();
  }
  getTime() {
    this.currentDate = new Date();
    this.currentTime = this.currentDate.getHours();
    this.currentMinute = `${
      this.currentDate.getMinutes() < 10 ? "0" : ""
    }${this.currentDate.getMinutes()}`;
    this.currentSecond = `${
      this.currentDate.getSeconds() < 10 ? "0" : ""
    }${this.currentDate.getSeconds()}`;
    this.displayTime = `${this.currentTime}:${this.currentMinute}:${this.currentSecond}`;
  }

  ngOnInit() {
    console.log(this.allSleepData);
    console.log(this.currentDate);
    this.presentingElement = document.querySelector(".ion-page");
    this.presentManualModel = document.querySelector(".ManualPage");

    // this.sleepService.logOvernightData(
    //   new OvernightSleepData(new Date(2022,10,20,22,10,5), new Date(2022,10,21,8,25,5))
    // );
    // this.sleepService.logOvernightData(
    //   new OvernightSleepData(new Date(2022,10,21,22,10,5), new Date(2022,10,22,6,25,5))
    // );
    // this.sleepService.logOvernightData(
    //   new OvernightSleepData(new Date(2022,10,22,23,10,5), new Date(2022,10,23,10,25,5))
    // );
    // this.sleepService.logOvernightData(
    //   new OvernightSleepData(new Date(2022,10,23,20,10,5), new Date(2022,10,24,7,5,5))
    // );
    // this.sleepService.logOvernightData(
    //   new OvernightSleepData(new Date(2022,10,24,20,10,5), new Date(2022,10,25,9,55,5))
    // );
    // this.sleepService.logOvernightData(
    //   new OvernightSleepData(new Date(2022,10,25,22,10,5), new Date(2022,10,26,7,25,5))
    // );
    


  }

  /* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
  get allSleepData() {
    return SleepService.AllSleepData;
  }

  toggleStartSleeping() {
    if (this.sleepStart == false) {
      this.sleepStartTime = this.currentDate;
      this.sleepStart = true;
      return;
    }
    this.sleepEndTime = this.currentDate;
    this.sleepStart = false;

    this.sleepService.logOvernightData(
      new OvernightSleepData(this.sleepStartTime, this.sleepEndTime)
    );

  }

  cancel(modal) {
    this.isOpen= false;
    console.log(this.sleepStartTime);
    console.log(this.sleepEndTime);
    if (this.sleepStartTime && this.sleepEndTime) {
      if (this.sleepEndTime.getTime() < this.sleepStartTime.getTime()) {
        console.log(123)
        this.warningMessage =
          "Invalid Input: start sleep time has to before end time";
        this.isOpen = true;
      } else {
        modal.dismiss();
        this.sleepService.logOvernightData(
          new OvernightSleepData(this.sleepStartTime, this.sleepEndTime)
        );
        console.log(this.sleepStartTime);
      }
    } else {
      this.warningMessage = "Start Time Sleep or End Time can not be empty";
      this.isOpen = true;
    }
  }

  cancelStartTime(modal) {
    this.sleepStartTime = new Date(this.startTimeInput);
    this.displayStartTime = this.sleepStartTime.toString().slice(0, this.sleepStartTime.toString().indexOf('GMT'));
    console.log(this.sleepStartTime);
    modal.dismiss();
  }

  cancelEndTime(modal) {
    this.sleepEndTime = new Date(this.endTimeInput);
    this.displayEndTime = this.sleepEndTime.toString().slice(0, this.sleepEndTime.toString().indexOf('GMT'));
    console.log(this.endTimeInput);
    modal.dismiss();
  }
}
