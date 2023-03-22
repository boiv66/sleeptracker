import { Component, ElementRef, OnInit } from "@angular/core";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

import { sleepGraphDataToday } from "../data/graphDataToday";
import { sleepGraphDataWeek } from "../data/graphDataWeek";
import ChartDataLabels from "chartjs-plugin-datalabels";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  todaySleepData: sleepGraphDataToday;
  weekGraphData: sleepGraphDataWeek;
  type: string = "night";
  todaySleepDuration: number;

  constructor(private elementRef: ElementRef) {
    this.todaySleepData = new sleepGraphDataToday();
    this.todaySleepData.todaySleepinessCalculation();
    this.todaySleepData.getLabelAndData();

    this.weekGraphData = new sleepGraphDataWeek();
    this.weekGraphData.sleepDurationInWeek();
    this.weekGraphData.getLabelAndDataForSleepGraph();
    this.weekGraphData.determineSleepinessInWeek();
    this.weekGraphData.getLabelAndDataForSleepinessGraph();
  }

  ngOnInit() {
    this.segmentChange();
    this.todaySleepDuration = this.todaySleepData.todaySleepDuration;
    console.log(this.todaySleepData.dataArray, "dataArrayinProfile");
    var sleepinessChart = new Chart("todaySleepinessChart", {
      plugins: [ChartDataLabels],
      type: "doughnut",
      data: {
        datasets: [
          {
            data: this.todaySleepData.dataArray,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(54, 162, 235, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
              "rgba(54, 162, 235, 1)",
            ],
          },
        ],
        labels: this.todaySleepData.labelArray,
      },
      options: {
        plugins: {
          datalabels: {
            formatter: (value) => {
              return value + "%";
            },
          },
        },
      },
    });

    var myChart = new Chart("myChart", {
      type: "bar",
      data: {
        labels: ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"],
        datasets: [
          {
            label: "Sleep Duration (in hours)",
            data: this.weekGraphData.sleepDataArray,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(54, 162, 235, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
              "rgba(54, 162, 235, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    var sleepinessChartInWeek = new Chart("weekSleepinessChart", {
      plugins: [ChartDataLabels],
      type: "polarArea",
      data: {
        datasets: [
          {
            label: "Average Sleepiness in A Week",
            data: this.weekGraphData.sleepinessArray,
            backgroundColor: [
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 99, 132, 0.2)",
            ],
            borderColor: [
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 99, 132, 1)",
            ],
          },
        ],
        labels: this.weekGraphData.sleepinessLabelArray,
      },
      options: {
        plugins: {
          datalabels: {
            formatter: (val, ctx) => {
              // Grab the label for this value
              const label = ctx.chart.data.labels[ctx.dataIndex];

              // Format the number with 2 decimal places
              const formattedVal = Intl.NumberFormat("en-US", {
                minimumFractionDigits: 2,
              }).format(val);

              // Put them together
              return `${label}: ${formattedVal}`;
            },
          },
        },
        scales: {
          r: {
            
            ticks: {
       
              backdropColor: "transparent",
              color: "rgba(255, 255, 255, 0.0)"
            }

        }
      }
    }}); 
  }

  segmentChange() {
    if (this.type == "night") {
      console.log(
        this.elementRef.nativeElement.querySelector("#todaySleepinessChartDiv"),
        "sleepiness graph change"
      );
      this.elementRef.nativeElement.querySelector(
        "#todaySleepinessChartDiv"
      ).style.display = "block";
      this.elementRef.nativeElement.querySelector("#divChart").style.display =
        "none";
      this.elementRef.nativeElement.querySelector(
        "#weekSleepinessChartDiv"
      ).style.display = "none";
    } else {
      this.elementRef.nativeElement.querySelector(
        "#todaySleepinessChartDiv"
      ).style.display = "none";
      this.elementRef.nativeElement.querySelector("#divChart").style.display =
        "block";
      this.elementRef.nativeElement.querySelector(
        "#weekSleepinessChartDiv"
      ).style.display = "block";
    }
  }
}
