import { Component, OnInit, Renderer2 } from '@angular/core';
import { MovieEntityService } from './services/movie-entity.service';
import { Observable, Subject } from 'rxjs';
import { debounceTime, delay, distinctUntilChanged, filter, first, switchMap, tap } from 'rxjs/operators';
import { Movie } from './model/movie';
import { MoviesDataService } from './services/movies-data.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle/slide-toggle';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }


}
