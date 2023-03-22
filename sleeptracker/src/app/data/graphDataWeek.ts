import { E } from "chart.js/dist/chunks/helpers.core";
import { sleepGraphDataToday } from "./graphDataToday";

export class sleepGraphDataWeek extends sleepGraphDataToday {
  currentWeek: number = this.isCurrentWeek(this.currentDate);
  weekSleepDurationObject: Object = {};
  sleepDataArray: Array<number> = [0, 0, 0, 0, 0, 0, 0];
  sleepinessLabelArray: Array<string> = [];
  weekSleepinessObject: Object = {};
  weekSleepinessCount: Object = {};
  sleepinessArray: Array<number> = [];

  constructor() {
    super();
  }

  sleepDurationInWeek() {
    for (const sleepDuration in this.sleepStorage) {
      if (this.isCurrentWeek(sleepDuration) == this.currentWeek) {
        const tempRate = new Date(sleepDuration);

        this.weekSleepDurationObject["day" + tempRate.getDay().toString()] =
          this.sleepStorage[sleepDuration];
      }
    }
  }

  isCurrentWeek(date) {
    const now = new Date(date);
    const onejan = new Date(now.getFullYear(), 0, 1);
    const week = Math.ceil(
      ((now.getTime() - onejan.getTime()) / 86400000 + onejan.getDay() + 1) / 7
    );
    return week;
  }

  determineDayInWeek(day) {
    if (day == "day0") {
      this.sleepDataArray[0] = this.weekSleepDurationObject[day];
    } else if (day == "day1") {
      this.sleepDataArray[1] = this.weekSleepDurationObject[day];
    } else if (day == "day2") {
      this.sleepDataArray[2] = this.weekSleepDurationObject[day];
    } else if (day == "day3") {
      this.sleepDataArray[3] = this.weekSleepDurationObject[day];
    } else if (day == "day4") {
      this.sleepDataArray[4] = this.weekSleepDurationObject[day];
    } else if (day == "day5") {
      this.sleepDataArray[5] = this.weekSleepDurationObject[day];
    } else {
      this.sleepDataArray[6] = this.weekSleepDurationObject[day];
    }
  }

  getLabelAndDataForSleepGraph() {
    for (const day of Object.keys(this.weekSleepDurationObject).sort()) {
      this.determineDayInWeek(day);
      //   this.sleepDataArray.push(this.weekSleepDurationObject[day]);
    }

    console.log(this.sleepDataArray, "sleepDataArray");
    console.log(this.labelArray);
  }

  determineSleepinessInWeek() {
    for (const date in this.sleepinessStorage) {
        // console.log(date, "date sleepiness")
      const tempDate = new Date(date);
      if (this.isCurrentWeek(tempDate) == this.currentWeek) {
        if ("day" + tempDate.getDay().toString() in this.weekSleepinessObject) {
          this.weekSleepinessObject["day" + tempDate.getDay()] +=
            this.sleepinessStorage[date];
          this.weekSleepinessCount["day" + tempDate.getDay()] += 1;
        } else {
          this.weekSleepinessObject["day" + tempDate.getDay()] =
            this.sleepinessStorage[date];
          this.weekSleepinessCount["day" + tempDate.getDay()] = 1;
        }
      }
    }

    
    console.log(this.weekSleepinessObject, "week sleepiness object "); 
    console.log(this.weekSleepinessCount, "sleepiness Count "); 
  }
  determineDayInWeekForSleepiness(date) {
    if (date == "day0") {
      this.sleepinessLabelArray.push("Sun");
    } else if (date == "day1") {
      this.sleepinessLabelArray.push("Mon");
    } else if (date == "day2") {
      this.sleepinessLabelArray.push("Tues");
    } else if (date == "day3") {
      this.sleepinessLabelArray.push("Wed");
    } else if (date == "day4") {
      this.sleepinessLabelArray.push("Thurs");
    } else if (date == "day5") {
      this.sleepinessLabelArray.push("Fri");
    } else if (date == "day6") {
      this.sleepinessLabelArray.push("Sat");
    }
  }
  getLabelAndDataForSleepinessGraph() {
    for (const date of Object.keys(this.weekSleepinessObject).sort()) {
      this.determineDayInWeekForSleepiness(date);
     console.log(this.weekSleepinessObject, "data week sleepiness in data label")
      this.sleepinessArray.push(
        +(
          this.weekSleepinessObject[date] / this.weekSleepinessCount[date]
        ).toFixed(2)
      );
    }
    console.log(this.sleepinessArray, "sleepinessArray in data"); 
    console.log(this.sleepinessLabelArray, "labelArray")
  }
}
