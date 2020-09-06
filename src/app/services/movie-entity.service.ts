import {Injectable} from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Movie } from '../model/movie';

@Injectable()
export class MovieEntityService  extends  EntityCollectionServiceBase<Movie>{

    constructor(serviceElementFactory: EntityCollectionServiceElementsFactory) {
        super('Movie', serviceElementFactory);
    }
}
