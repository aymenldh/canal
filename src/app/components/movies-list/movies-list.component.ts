import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterOutlet, NavigationExtras } from '@angular/router';
import { Movie } from '../../models/movie.model';
import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [
    MatProgressBarModule,
    HttpClientModule,
    NgFor,
    NgIf,
    MatCardModule,
    MatPaginatorModule
  ],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent {
  movies?: Movie[];
  movie?: Movie;
  length?: number;
  public isLoading: boolean = false;
  @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);

  constructor(private router: Router, private moviesService: MoviesService) {
  }
  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(page: number = 1): void {
    this.isLoading = true;
    this.moviesService
      .getMovies(page)
      .subscribe({
        next: (data: any) => {
          this.movies = data.results
          this.length = data.total_results

        },
        error: (e) => { console.error(e); this.isLoading = false; },
        complete: () => { this.isLoading = false; }
      })
  }

  navigateToDetails(movie: Movie): void {
    this.moviesService.setSharedMovie(movie)
    this.router.navigate(['/details']);
  }
}