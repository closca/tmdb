import { Component, OnInit, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../../model/movie';
import { delay } from 'rxjs/operators';
import { MovieEntityService } from '../../services/movie-entity.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MoviesDataService } from '../../services/movies-data.service';

@Component({
    selector: 'app-movies-list',
    templateUrl: './movies-list.component.html',
    styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

    movies$: Observable<Movie[]>;
    moviesLoading$: Observable<boolean>;
    selectedMovieId: string;

    private nextPage = 2;

    constructor(private movieService: MovieEntityService,
                private router: Router,
                private route: ActivatedRoute,
                private renderer: Renderer2,
                private moviesDataService: MoviesDataService) {
    }

    get showLoadMore(): boolean {
        return this.nextPage > 1 && this.moviesDataService.totalPages > 0 && this.moviesDataService.totalPages >= this.nextPage;
    }

    ngOnInit(): void {
        this.movies$ = this.movieService.filteredEntities$;
        this.moviesLoading$ = this.movieService.loading$.pipe(delay(0));

        this.movieService.getAll();

        this.router.events.subscribe(route => {
            if (route instanceof NavigationEnd) {
                if (route.url === '/') {
                    this.selectedMovieId = null;
                }
            }
        });
    }

    loadMore(): void {
        if (this.moviesDataService.totalPages < this.nextPage) {
            return;
        }
        this.movieService.getWithQuery({
            page: this.nextPage.toString()
        });
        this.nextPage++;
    }

    onSelectMovie(movieId: string): void {
        this.selectedMovieId = movieId;
        this.router.navigateByUrl(`/${movieId}`);
    }

}
