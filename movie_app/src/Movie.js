import React, { Component } from 'react';
import './Movie.css';
import PropTypes from 'prop-types';

// class Movie extends Component { // smart components
//     static propTypes = {
//         title: PropTypes.string.isRequired,
//         poster: PropTypes.string.isRequired,
//     }
//     render() {
//         return (
//             <div>
//                 <MoviePoster poster={this.props.poster} />
//                 <h1>{this.props.title}</h1>
//             </div>
//         )
//     }
// }

function Movie({title, poster}) { // dumb components, don't have state
    return (
        <div>
            <MoviePoster poster={poster} />
            <h1>{title}</h1>
        </div>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
}

class MoviePoster extends Component { // smart components
    static propTypes = {
        poster: PropTypes.string.isRequired,
    }
    render() {
        return (
            <img src={this.props.poster} alt="Movie Poster" />
        )
    }
}

// function MoviePoster({ poster }) { // dumb components, don't have state
//     return (
//         <img src={poster} alt="Movie Poster" />
//     )
// }
// MoviePoster.propTypes = {
//     poster: PropTypes.string.isRequired,
// }

export default Movie