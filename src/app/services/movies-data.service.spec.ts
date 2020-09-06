import { TestBed } from '@angular/core/testing';

import { MoviesDataService } from './movies-data.service';
import { HttpClientModule } from '@angular/common/http';
import { EntityDataModule } from '@ngrx/data';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { IHttpTmDBSearchResponse, Movie } from '../model/movie';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('MoviesDataService', () => {
    let httpTestingController: HttpTestingController;
    let service: MoviesDataService;

    const mockedMovies: Movie[] = [
        {
            popularity: 1094.47,
            vote_count: 141,
            video: false,
            poster_path: '/uOw5JD8IlD546feZ6oxbIjvN66P.jpg',
            id: '718444',
            adult: false,
            backdrop_path: '/x4UkhIQuHIJyeeOTdcbZ3t3gBSa.jpg',
            original_language: 'en',
            original_title: 'Rogue',
            genre_ids: [
                28
            ],
            title: 'Rogue',
            vote_average: 5.9,
            overview: 'Battle-hardened O’Hara leads a lively mercenary team of soldiers on a daring mission: rescue hostages from their captors in remote Africa. But as the mission goes awry and the team is stranded, O’Hara’s squad must face a bloody, brutal encounter with a gang of rebels.',
            release_date: '2020-08-20'
        },
        {
            popularity: 801.631,
            vote_count: 292,
            video: false,
            poster_path: '/sy6DvAu72kjoseZEjocnm2ZZ09i.jpg',
            id: '581392',
            adult: false,
            backdrop_path: '/gEjNlhZhyHeto6Fy5wWy5Uk3A9D.jpg',
            original_language: 'ko',
            original_title: '반도',
            genre_ids: [
                28,
                27,
                53
            ],
            title: 'Peninsula',
            vote_average: 7.4,
            overview: 'A soldier and his team battle hordes of post-apocalyptic zombies in the wastelands of the Korean Peninsula bioskopin21.xyz.',
            release_date: '2020-07-15'
        },
    ];

    const mockedData: IHttpTmDBSearchResponse = {
        page: 1,
        total_pages: 1,
        total_results: 2,
        results: mockedMovies
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                HttpClientModule,
                StoreModule.forRoot({}, {}),
                EffectsModule.forRoot([]),
                EntityDataModule.forRoot({}),
            ]
        });
        httpTestingController = TestBed.get(HttpTestingController);
        service = TestBed.inject(MoviesDataService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('getAll() returned observable should match the right data', () => {

        service.getAll().subscribe((movies) => {
            expect(movies.length).toEqual(2);
            expect(service.totalPages).toEqual(mockedData.total_pages);
        });

        const req = httpTestingController.expectOne(() => true);

        expect(req.request.method).toEqual('GET');

        req.flush(mockedData);
    });

    it('getWithQuery() returned observable should match the right data', () => {

        service.getWithQuery({}).subscribe((movies) => {
            expect(movies.length).toEqual(2);
            expect(service.totalPages).toEqual(mockedData.total_pages);
        });

        const req = httpTestingController.expectOne(() => true);

        expect(req.request.method).toEqual('GET');

        req.flush(mockedData);
    });
});
