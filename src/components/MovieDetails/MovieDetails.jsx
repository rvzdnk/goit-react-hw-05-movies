import React from "react";
import { ImageWrapper } from './MovieDetails.styled';

export const MovieDetails = ({ movieById }) => {
    const { poster_path, release_date, title, vote_average, overview, genres } = movieById;

    const releaseYear = release_date.slice(0, 4);
    const userScore = `${(vote_average * 10).toFixed(0)}%`;
    const genreName = genres?.map(genre => genre.name).join(', ');

    return (
        <ImageWrapper>
            <div>
                <img
                    src={poster_path && `https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={`No display`}
                />
            </div>
            <div>
                <h2>{`${title} (${releaseYear}`}</h2>
                <p>{`User score: ${userScore}`}</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                <p>{`${genreName}`}</p>
            </div>
        </ImageWrapper>
    )
}