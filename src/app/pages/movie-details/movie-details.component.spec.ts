import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsComponent } from './movie-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EntityCollectionServiceElementsFactory, EntityDataModule } from '@ngrx/data';
import { MovieEntityService } from '../../services/movie-entity.service';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('MovieDetailsComponent', () => {
    let component: MovieDetailsComponent;
    let fixture: ComponentFixture<MovieDetailsComponent>;
    const movieEntityService = {
        loading$: new Observable(),
        entities$: of([{
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
        }])
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MovieDetailsComponent],
            imports: [
                RouterTestingModule,
                HttpClientTestingModule,
                StoreModule.forRoot({}, {}),
                EffectsModule.forRoot([]),
                EntityDataModule.forRoot({}),
            ],
            providers: [
                {
                    provide: MovieEntityService,
                    useValue: movieEntityService
                },
                {
                    provide: EntityCollectionServiceElementsFactory,
                    useValue: {
                        create: () => {
                            return {
                                dispatcher: {
                                    guard: null
                                },
                                selectors$: {

                                }
                            };
                        }
                    }

                }, {
                    provide: ActivatedRoute,
                    useValue: {
                        params: of({
                            id: '718444'
                        })
                    },
                },
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MovieDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
