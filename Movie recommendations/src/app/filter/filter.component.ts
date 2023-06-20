import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import {Movie} from './movie.model';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  genre="";
  filteredMovies: Movie[]=[];
  constructor (private movieService:MovieService){
  }
  filteredMovies(){
    if(this.genre.trim()===""){
      this.filteredMovies=[];
      return;
    }
    this.movieService.filteredMovies(this.genre).subscribe(movies=>{
      this.filteredMovies=movies;
    })
  }
}
