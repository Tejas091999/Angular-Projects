import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { RecommendationComponent } from './recommendation/recommendation.component';

const routes :Routes=[
  {path:"",redirectTo:"/search",pathMatch:"full"},
  {path:"search",component:SearchComponent},
  {path:"filter",component:FilterComponent},
  {path:"recommendation",component:RecommendationComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FilterComponent,
    RecommendationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
