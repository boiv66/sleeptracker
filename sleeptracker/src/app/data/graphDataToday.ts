//sleepGraphData

export class sleepGraphDataToday {
  currentDate: Date;
  sleepStorage: Object; 
  todaySleepDuration: any; 

  todaySleepinessObject = {};
  sleepinessStorage: Object; 
  sleepinessCount: number = 0;
  labelArray = [];
  dataArray = [];
  constructor() {
    this.currentDate = new Date(); 
    this.sleepStorage = JSON.parse(window.localStorage.getItem("sleepData"));
    this.todaySleepDuration = this.sleepStorage[this.currentDate.toLocaleDateString()]? this.sleepStorage[this.currentDate.toLocaleDateString()] : undefined;
    this.sleepinessStorage = JSON.parse(
      window.localStorage.getItem("standordSleepinessData")
    );
  }


  todaySleepinessCalculation() {
    
    for (const sleepinessRate in this.sleepinessStorage) {
      const tempRate = new Date(sleepinessRate);
      if (
        tempRate.toLocaleDateString() == this.currentDate.toLocaleDateString()
      ) {
        this.sleepinessCount += 1;
 
        if (
          "rate" + this.sleepinessStorage[sleepinessRate].toString() in
          this.todaySleepinessObject
        ) {
          
          this.todaySleepinessObject[
            "rate" + this.sleepinessStorage[sleepinessRate].toString()
          ] += 1;
        } else {
          this.todaySleepinessObject[
            "rate" + this.sleepinessStorage[sleepinessRate].toString()
          ] = 1;
        }
      }
    }

    console.log(this.sleepinessStorage, "todayObject"); 
  }

  getLabelAndData() {
    for (const rate of Object.keys(this.todaySleepinessObject).sort()) {
      if (rate == "rate1") {
        this.labelArray.push("Fully Active");
      } else if (rate == "rate2") {
        this.labelArray.push("Not peak active");
      } else if (rate == "rate3") {
        this.labelArray.push("Not fully alert");
      } else if (rate == "rate4") {
        this.labelArray.push("Foggy");
      } else if (rate == "rate5") {
        this.labelArray.push("Slow down");
      } else if (rate == "rate6") {
        this.labelArray.push("Sleepy");
      } else if (rate == "rate7") {
        this.labelArray.push("very sleepy");
      }

      this.dataArray.push(
        Math.floor((+this.todaySleepinessObject[rate] / this.sleepinessCount)*100)
      );
    }
    console.log(this.dataArray, "dataArray");
  }
}
