import { Component,OnInit } from '@angular/core';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-record-workout',
  templateUrl: './record-workout.component.html',
  styleUrls: ['./record-workout.component.css']
})
export class RecordWorkoutComponent implements OnInit{
  workouts:any[]=[];
  selectedWorkout:any;
  exercise:string | undefined;
  sets:number | undefined
  reps:number | undefined

  constructor(private workoutService: WorkoutService){}
  ngOnInit() {
    this.workouts=this.workoutService.getWorkoutRoutines()
  }

  recordExercises(){
    const recordedExercise={
      workout:this.selectedWorkout,
      exercise:this.exercise,
      sets:this.sets,
      reps:this.reps
    }
    this.workoutService.recordedExercise(recordedExercise)
  }
}
