import { Component,OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-five-day-forecast',
  templateUrl: './five-day-forecast.component.html',
  styleUrls: ['./five-day-forecast.component.css']
})
export class FiveDayForecastComponent implements OnInit {
  fiveDayForecast:any[]=[]
  constructor(private weatherService:WeatherService){}
  ngOnInit() {
    this.weatherService.getFiveDayForecast().subscribe(data=>{
      this.fiveDayForecast=data;
    })
    }
}
