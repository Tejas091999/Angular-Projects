import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import {Movie} from './movie.model';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl ="https://api.example.com/movies"
  constructor( private http:HttpClient) { }

  searchMovies(query:string):Observable<Movie[]>{
    const url ="${this.apiUrl}/search?q=${query}";
    return this.http.get<any>(url).pipe(
      map(response=>response.results.map((movie:any)=>this.mapToMovie(movie)))
    );
  }

  filterMovies(genre:string):Observable<Movie[]>{
    const url ="${this.apiUrl}/filter?q=${genre}";
    return this.http.get<any>(url).pipe(
      map(response=>response.results.map((movie:any)=>this.mapToMovie(movie)))
    );
  }

  getRecommendations():Observable<Movie[]>{
    const url ="${this.apiUrl}/recommendations";
    return this.http.get<any>(url).pipe(
      map(response=>response.results.map((movie:any)=>this.mapToMovie(movie)))
    );
  }

  private mapToMovie(data:any):Movie{
    return{
      title:data.title,
      year:data.year,
      poster:data.poster||'assets/placeholder.png'
    }
  }
}
