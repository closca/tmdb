import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from '../../model/movie';

@Component({
    selector: 'app-movie-item',
    templateUrl: './movie-item.component.html',
    styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {

    @Input() movie: Movie;
    @Input() selectedMovieId: string;
    @Output() onSelectMovie = new EventEmitter<string>();
    constructor() {
    }

    ngOnInit(): void {
    }

    selectMovie(): void {
        this.onSelectMovie.emit(this.movie.id);
    }

}
