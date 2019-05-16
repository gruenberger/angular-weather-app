import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { WeatherReport } from '../model/weather.model';

@Injectable()
export class WeatherService {
    apiKey = 'c65ff15ca4c17b0f5454bce9066b94b4';
    apiURL = 'http://api.openweathermap.org/data/2.5/weather?q=';

    constructor(private http: HttpClient) {}

  getData(city: string) {
      return this.http.get<WeatherReport>(`${this.apiURL}${city.split(' ').join('')}&appid=${this.apiKey}`);
  }
}
