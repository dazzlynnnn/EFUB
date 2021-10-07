import { FETCH_TRENDING, DELETE_TRENDING } from "../actions";

export default function trendingReducer(state = [], action) {
    switch (action.type) {
        case FETCH_TRENDING:
        return {
            ...state,
            movies: action.data,
        };
        case DELETE_TRENDING:
        const movies = state.movies;
        return {
            ...state,
            movies: {
            ...movies,
            results: movies.results.filter((movie) => movie.id !== action.id),
            },
        };
        default:
        return state;
    }
}