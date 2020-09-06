import { Component, OnInit, Renderer2 } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle/slide-toggle';
import { MovieEntityService } from '../../services/movie-entity.service';
import { Observable, of, Subject } from 'rxjs';
import { debounceTime, delay, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


    searchTerm$ = new Subject<string>();
    moviesLoading$: Observable<boolean>;

    constructor(private renderer: Renderer2,
                private router: Router,
                private movieService: MovieEntityService) {
    }

    ngOnInit(): void {
        this.moviesLoading$ = this.movieService.loading$.pipe(delay(0));
        this.search(this.searchTerm$).subscribe();
    }

    onThemeModeChange(value: MatSlideToggleChange): void {
        if (value.checked) {
            this.renderer.addClass(document.body, 'darkMode');
        } else {
            this.renderer.removeClass(document.body, 'darkMode');
        }
    }

    search(terms: Observable<string>): Observable<any> {
        return terms
            .pipe(
                debounceTime(400),
                distinctUntilChanged(),
                switchMap(searchTerm => {
                    this.movieService.setFilter(searchTerm);
                    this.router.navigateByUrl('/');
                    return of({});
                }));
    }

}
