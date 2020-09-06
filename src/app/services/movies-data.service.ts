import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { IHttpTmDBSearchResponse, Movie } from '../model/movie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class MoviesDataService extends DefaultDataService<Movie> {

    totalPages: number;

    constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
        super ('Movie', http, httpUrlGenerator);
    }

    getAll(): Observable<Movie[]>  {
        return this.http.get('https://api.themoviedb.org/3/discover/movie', {
            params: {
                api_key: environment.tmDbApiKey,
                sort_by: 'popularity.desc'
            }
        })
            .pipe(
                map((res: IHttpTmDBSearchResponse) => {
                    this.totalPages = res.total_pages;
                    return res.results;
                })
            );
    }

    getWithQuery(queryParams: any): Observable<Movie[]> {
        return this.http.get('https://api.themoviedb.org/3/discover/movie', {
            params: {
                api_key: environment.tmDbApiKey,
                sort_by: 'popularity.desc',
                ...queryParams
            }
        })
            .pipe(
                map((res: IHttpTmDBSearchResponse) => {
                    this.totalPages = res.total_pages;
                    return res.results;
                })
            );
    }
}
