import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Movie } from '../models/movie.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {

  private queryParams = new HttpParams()
    .set("api_key", environment.api_key)
    .set("language", "en-US")
    .set("sort_by", "popularity.desc")
    .set("timezone", "America/New_York")
    .set("include_null_first_air_dates", false);

  private sharedMovie?: Movie;

  constructor(private http: HttpClient) {
  }

  getMovies(page: number): Observable<Movie[]> {
    this.queryParams = this.queryParams.append("page", page);
    return this.http.get<any>(environment.apiUrl, { params: this.queryParams })
  }

  setSharedMovie(movie: Movie): void {
    this.sharedMovie = movie;
  }

  getSharedMovie(): any {
    return this.sharedMovie;
  }
}
