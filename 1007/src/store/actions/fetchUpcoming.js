import { BASE_URL, API_KEY } from "../../config";
import axios from "axios";
import { FETCH_UPCOMING } from ".";

export const fetchUpcomingData = (data) => {
    return {
        type: FETCH_UPCOMING,
        data,
    };
};

export const fetchUpcoming = (dispatch) => {
    axios
        .get(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US`)
        .then((response) => dispatch(fetchUpcomingData(response.data)))
        .catch((error) => console.log(error));
};