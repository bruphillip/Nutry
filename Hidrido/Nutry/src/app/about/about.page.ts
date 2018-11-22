import { Component, OnInit, ViewChild } from "@angular/core";
import * as Chart from "chart.js";
import { getContext } from "@angular/core/src/render3/context_discovery";

@Component({
  selector: "app-about",
  templateUrl: "about.page.html",
  styleUrls: ["about.page.scss"]
})
export class AboutPage implements OnInit {
  @ViewChild("canvas")
  canvas;

  chart: Chart;

  @ViewChild("canvas2")
  canvas2;

  chart2: Chart;

  constructor() {}

  ngOnInit() {
    this.chart = new Chart(this.canvas.nativeElement, {
      type: "bar",
      data: {
        labels: ["Frutas", "Verduras", "Legumes", "Liquido"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 15],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });

    this.chart2 = new Chart(this.canvas2.nativeElement, {
      type: "line",
      data: {
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 15],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {}
    });
  }
}
