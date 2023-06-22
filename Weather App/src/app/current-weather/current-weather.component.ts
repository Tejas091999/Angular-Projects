import { Component ,OnInit} from '@angular/core';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit{
  weatherData:any;
  constructor(private WeatherService:WeatherService){}
  ngOnInit() {
    this.WeatherService.getCurrentWeather().subscribe(data=>{
      this.weatherData=data})
  }
}
