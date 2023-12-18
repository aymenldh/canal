# Canal+ Movies

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.7.

##   VERSION 1.0.0
Cette version de Canal+ Movies contient deux pages:
        ==> Liste de films correspond au composant movies-list: C'est une Grid List bi-dimentionnels de Angular Materiels.
            On affiche les filmes par page de 20 elements. Pour pouvoir paginer l'affichage des films, j'ai utilisé le paginator de Angular material 'mat-paginator'.
            J'ai choisi d'afficher 20 element par page car l'api rend ce nombre de films par page. Comme amérioration, nous pouvons personaliser le nombre de films par page.
        ==> Détails film: j'ai mis une page qui marche et qui affiche quelques informations sur le films choisi pour montrer que tout fonctionne.

MoviesService: ce service a été utilisé pour l'appel http de getMovies et également pour partager le movie selectionné entre la page movies-list et details

Les URL des APIs sont mentionnées dans les fichiers environment.ts (pour la PROD) et environment.depvelopment pour l'environnement de DEV.
        ==>  L'URL utilisée pour cet execrcice est celle de l'environnement de developpement :
             apiUrl: 'https://api.themoviedb.org/3/discover/tv'
        ==>  Pour ajouter d'autre environnement, il faut créer un fichier environment par environnement (ex environment.staging.ts).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
