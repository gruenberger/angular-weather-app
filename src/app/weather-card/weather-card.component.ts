import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WeatherReport } from '../model/weather.model';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {
  @Input()
  weatherReport: WeatherReport;

  @Output()
  city: EventEmitter<string> = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }

  deleteReport(){
    console.log(`Deleting ${this.weatherReport.name}`);
    this.city.emit(this.weatherReport.name);
  }

}
