import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { StoreModule } from '@ngrx/store';
import { EntityDataModule, EntityDataService, EntityDefinitionService, PersistenceResultHandler } from '@ngrx/data';
import { entityMetadata } from './entity-metadata';
import { EffectsModule } from '@ngrx/effects';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { MovieEntityService } from './services/movie-entity.service';
import { MoviesDataService } from './services/movies-data.service';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgxStarsModule } from 'ngx-stars';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
    declarations: [
        AppComponent,
        MovieItemComponent,
        MovieDetailsComponent,
        MoviesListComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatProgressBarModule,
        MatSlideToggleModule,
        NgxStarsModule,
        MatIconModule,
        StoreModule.forRoot({}, {}),
        EffectsModule.forRoot([]),
        EntityDataModule.forRoot({}),
        StoreRouterConnectingModule.forRoot({
            stateKey: 'router',
            routerState: RouterState.Minimal
        }),
        StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production})
    ],
    providers: [
        MovieEntityService,
        MoviesDataService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

    constructor(private eds: EntityDefinitionService,
                private entityDataService: EntityDataService,
                private moviesDataService: MoviesDataService) {
        eds.registerMetadataMap(entityMetadata);
        entityDataService.registerService('Movie', moviesDataService);
    }
}
