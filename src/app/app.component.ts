import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { WeatherReport } from "./model/weather.model";
import { WeatherService } from "./service/weather.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "weather-app";
  weatherReports: WeatherReport[];
  cities: string[];

  constructor(private weatherService: WeatherService) {
    this.cities = ["London", "Moscow", "Paris"];
    this.weatherReports = [];
  }

  ngOnInit() {
    for (let city of this.cities) {
      this.weatherService.getData(city).subscribe((data: WeatherReport) => {
        this.weatherReports.push({ ...data });
      });
    }
  }

  addNewCity(city) {
    this.weatherService.getData(city).subscribe((data: WeatherReport) => {
      this.weatherReports.push({ ...data });
    });
  }

  deleteReport(city){
    console.log(`Deleting ${city} in app.component method`);
    for( let i = 0; i < this.weatherReports.length; i++){
      if ( this.weatherReports[i].name === city) {
        this.weatherReports.splice(i, 1);
        i--;
      }
   }
  }
}
