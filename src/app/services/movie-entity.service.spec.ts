import { TestBed } from '@angular/core/testing';

import { MovieEntityService } from './movie-entity.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EntityCollectionServiceElementsFactory, EntityDataModule } from '@ngrx/data';
import { provideMockStore } from '@ngrx/store/testing';

describe('MovieEntityService', () => {
    let service: MovieEntityService;

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                HttpClientModule,
                StoreModule.forRoot({}, {}),
                EffectsModule.forRoot([]),
                EntityDataModule.forRoot({}),
            ],
            providers: [
                MovieEntityService,
                {
                    provide: EntityCollectionServiceElementsFactory,
                    useValue: {
                        create: () => {
                            return {
                                dispatcher: {
                                    guard: null
                                },
                                selectors$: {}
                            };
                        }
                    }

                },
                provideMockStore()
            ],
        });
        service = TestBed.inject(MovieEntityService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
