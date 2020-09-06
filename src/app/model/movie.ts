export interface Movie {
    vote_count: number;
    id: string;
    video: boolean;
    vote_average: number;
    title: string;
    popularity: number;
    poster_path: string;
    original_language: string;
    original_title: string;
    genre_ids: number[];
    backdrop_path: string;
    adult: boolean;
    overview: string;
    release_date: string;
    first_air_date?: string;
}

export interface IHttpTmDBSearchResponse {
    page: number;
    total_results: number;
    total_pages: number;
    results: Movie[];
}
