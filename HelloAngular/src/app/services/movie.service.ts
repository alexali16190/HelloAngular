import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Movie } from '../shared/models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private apiService: ApiService) { }
  getAllMovies():Observable<Movie[]>
  {
      return this.apiService.getAll('/movies');
  }
  getMovieById():Observable<Movie[]>
  {
      return this.apiService.getOne('/movie', id);
  }
}
