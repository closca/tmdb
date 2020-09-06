import { EntityMetadataMap } from '@ngrx/data';
import { Movie } from './model/movie';

export const entityMetadata: EntityMetadataMap = {
    Movie: {
        filterFn: (entities: Movie[], search: string) => {
            if (search && search.trim().length) {
                return entities.filter(e => {
                    return e.original_title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
                });
            }
            return entities;
        }
    }
};
