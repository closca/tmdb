import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';

const routes: Routes = [
    {
        path: '',
        component: MoviesListComponent,
        children: [
            {
                path: ':id',
                component: MovieDetailsComponent,
            }
        ]
    }, {
        path: '**',
        redirectTo: '/'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
