import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl="https://api.weatherapi.com/v1"
  constructor(private http:HttpClient) { }

  getCurrentWeather(){
    const url="${this.apiUrl}/current.json?key=YOUR_API_KEY&q=LOCATION";
    return this.http.get(url)
  }

  getHourlyForecast(){
    const url = "${this.apiUrl}/forecast.json?key=YOUR_API_KEY&q=LOCATION&days=1&hour=24";
    return this.http.get(url)
    .pipe(
      map((response:any)=>response.forecast.forecastday[0].hour)
    )
  }

  getFiveDayForecast(){
    const url = "${this.apiUrl}/forecast.json?key=YOUR_API_KEY&q=LOCATION&days=5";
    return this.http.get(url)
    .pipe(
      map((response:any)=>response.forecast.forecastday)
    )
  }
}
