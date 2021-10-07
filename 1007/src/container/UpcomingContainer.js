import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUpcoming } from "../store/actions/fetchUpcoming";

const UpcomingContainer = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchUpcoming(dispatch);
    }, []);

    const UpcomingData = useSelector((state) => state.upcoming.movies) || {
        results: [],
    };
    console.log(UpcomingData);

    return (
        <div>
        <h1>Latest</h1>
        {UpcomingData.results &&
            UpcomingData.results.map((movie) => (
            <div key={movie.id}>
                <img
                style={{ width: "90%" }}
                alt="movie poster"
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                key={movie.id}
                />
                <h3>{movie.name || movie.title}</h3>
                <p>{movie.overview}</p>
            </div>
            ))}
        </div>
    );
};

export default UpcomingContainer;