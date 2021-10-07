import { combineReducers } from "redux";
import TrendingReducer from "./reducerTrending";
import UpcomingReducer from "./reducerUpcoming";

const rootReducer = combineReducers({
    trending: TrendingReducer,
    upcoming: UpcomingReducer,
});

export default rootReducer;