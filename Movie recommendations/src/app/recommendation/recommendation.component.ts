import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie.model'
@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {
  recommendations: Movie[]=[];
  constructor (private movieService:MovieService){}
  ngOnInit() {
    this.movieService.getRecommendations().subscribe(movie=>{
      this.recommendations=movie;
    })
  }
}
