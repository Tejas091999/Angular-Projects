import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { HourlyForecastComponent } from './hourly-forecast/hourly-forecast.component';
import { FiveDayForecastComponent } from './five-day-forecast/five-day-forecast.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    HourlyForecastComponent,
    FiveDayForecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
