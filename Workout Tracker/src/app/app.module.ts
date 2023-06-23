import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateWorkoutComponent } from './create-workout/create-workout.component';
import { RecordWorkoutComponent } from './record-workout/record-workout.component';
import { Routes,RouterModule} from '@angular/router';

const routes:Routes=[
  {path:"create-workout",component:CreateWorkoutComponent},
  {path:"record-exercise",component:RecordWorkoutComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    CreateWorkoutComponent,
    RecordWorkoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
