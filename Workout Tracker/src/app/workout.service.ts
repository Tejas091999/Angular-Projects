import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  workoutRoutines:any[]=[];
  recordedExercises:any[]=[];
  constructor() { }

  createWorkoutRoutine(newWorkout:any){
    this.workoutRoutines.push(newWorkout)
  }

  recordedExercise(recordedExercise:any){
    this.recordedExercises.push(recordedExercise)
  }

  getWorkoutRoutines(){
    return this.workoutRoutines
  }

  getRecordedExercises(){
    return this.recordedExercise
  }
}
