import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MovieEntityService } from '../../services/movie-entity.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EntityCollectionServiceElementsFactory, EntityDataModule } from '@ngrx/data';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, of, Subject } from 'rxjs';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;
    const movieEntityService = {
        loading$: new Observable()
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HeaderComponent],
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
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should change theme', () => {
        component.onThemeModeChange({checked: true, source: null});
        fixture.detectChanges();
        expect(document.querySelector('body').className).toEqual('darkMode');
        component.onThemeModeChange({checked: false, source: null});
        fixture.detectChanges();
        expect(document.querySelector('body').className).toEqual('');
    });
});
