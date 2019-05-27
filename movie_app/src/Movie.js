import React, { Component } from 'react';
import './Movie.css';
import PropTypes from 'prop-types';

function Movie({ title, poster, genres, synopsis }) { // dumb components, don't have state
    return (
        <div className="Movie">
            <div className="Movie_Columns">
                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie_Columns">
                <h1>{title}</h1>
                <div className="Movie_Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <p className="Movie_Synopsis">
                    {synopsis}
                </p>
            </div>
        </div>
    )
}

function MoviePoster({ poster, alt }) { // dumb components, don't have state
    return (
        <img src={poster} alt={alt} title={alt} className="Movie_Poster" />
    )
}

function MovieGenre({ genre }) {
    return (
        <span className="Movie_Genre">{genre} </span>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired,
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired,
}

export default Movie