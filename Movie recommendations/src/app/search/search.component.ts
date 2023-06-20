import { Component } from '@angular/core';
import {Movie} from "../movie.model";
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchQuery="";
  movies:Movie[]=[]
  constructor(private movieService : MovieService){}
  searchMovies(){
    if(this.searchQuery.trim()===""){
      this.movies=[];
      return
    }
    this.movieService.searchMovies(this.searchQuery).subscribe(movies=>{
      this.movies=movies
    })
  }
}
