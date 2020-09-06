import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from '../../model/movie';
import { MovieEntityService } from '../../services/movie-entity.service';
import { delay, map, tap } from 'rxjs/operators';

@Component({
    selector: 'app-movie-details',
    templateUrl: './movie-details.component.html',
    styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

    movie$: Observable<Movie>;

    constructor(private route: ActivatedRoute,
                private moviesService: MovieEntityService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            const movieId = params.id;
            this.movie$ = this.moviesService.entities$
                .pipe(
                    map(movies => movies.find(movie => movie.id.toString() === movieId)),
                    tap(movie => {
                        if (!movie) {
                            this.router.navigateByUrl('/');
                        }
                    }),
                    delay(0)
                );
        });

    }

}
