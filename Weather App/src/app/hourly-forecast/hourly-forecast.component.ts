import { Component ,OnInit} from '@angular/core';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-hourly-forecast',
  templateUrl: './hourly-forecast.component.html',
  styleUrls: ['./hourly-forecast.component.css']
})
export class HourlyForecastComponent implements OnInit{
  hourlyForecast:any[]=[];
  constructor(private weatherService:WeatherService){}
  ngOnInit() {
    this.weatherService.getHourlyForecast().subscribe(data=>{
      this.hourlyForecast=data;
    })
  }
}
