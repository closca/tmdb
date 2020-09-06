import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesListComponent } from './movies-list.component';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EntityCollectionServiceElementsFactory, EntityDataModule } from '@ngrx/data';
import { MovieEntityService } from '../../services/movie-entity.service';
import { Observable } from 'rxjs';

describe('MoviesListComponent', () => {
    let component: MoviesListComponent;
    let fixture: ComponentFixture<MoviesListComponent>;
    const movieEntityService = {
        loading$: new Observable(),
        getAll: () => {}
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MoviesListComponent],
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

                },
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MoviesListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
