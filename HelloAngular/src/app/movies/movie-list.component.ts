import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../shared/models/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[];
  constructor(private movieService: MovieService) { }

  ngOnInit() 
  {
      this.movieService.getAllMovies()
      .subscribe(
        m => {
          this.movies = m;
          //console.log(this.movies);
        }
      );
      this.movieService.getMovieById(this.Id)
      .subscribe(
        m => {
          this.movies = m;
          console.table(this.movies);
        }
      );
  }

}
