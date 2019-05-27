import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
    componentWillMount() {

    }

    render() {
        return (
            <div>
                <MoviePoster poster={this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>
        )
    }

    componenDidMount() {
        
    }
}

class MoviePoster extends Component {
    render() {
        return (
            <img src={this.props.poster} />
        )
    }
}

export default Movie