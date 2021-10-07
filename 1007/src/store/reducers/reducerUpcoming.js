import { FETCH_UPCOMING } from "../actions";

export default function upcomingReducer(state = [], action) {
    switch (action.type) {
        case FETCH_UPCOMING:
        return {
            ...state,
            movies: action.data,
        };
        default:
        return state;
    }
}