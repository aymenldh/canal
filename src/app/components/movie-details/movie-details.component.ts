import { Component } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [
    NgIf,
    MatCardModule
  ],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {
  movie?: Movie;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.movie = this.moviesService.getSharedMovie()    
  }
}
