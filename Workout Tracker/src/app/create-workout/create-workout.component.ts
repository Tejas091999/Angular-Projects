import { Component } from '@angular/core';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-create-workout',
  templateUrl: './create-workout.component.html',
  styleUrls: ['./create-workout.component.css']
})
export class CreateWorkoutComponent {
  workoutName: string | undefined;
  exercises:string | undefined
  
  constructor( private workoutService:WorkoutService){}

  saveWorkoutRoutine(){
    const newWorkout={
      name:this.workoutName,
      exercises:this.exercises?.split(",").map(exercises=>exercises.trim())
    }
    this.workoutService.createWorkoutRoutine(newWorkout);
    this.resetForm()
  }
  resetForm(){
    this.workoutName="";
    this.exercises="";
  }
}
