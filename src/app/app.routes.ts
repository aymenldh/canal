import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  {
    path: 'movies', loadComponent: () =>
      import(
        './components/movies-list/movies-list.component'
      ).then((m) => m.MoviesListComponent),
  },
  {
    path: 'details', loadComponent: () =>
      import(
        './components/movie-details/movie-details.component'
      ).then((m) => m.MovieDetailsComponent),
  }
];
