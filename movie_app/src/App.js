import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';
import { thisExpression } from '@babel/types';
import Axios from 'axios';

class App extends Component {
  state = {
  }

  componentDidMount() {
    Axios.get('https://yts.am/api/v2/list_movies.json?sort_by=download count')
      .then(res => this.setState(res.data.data.movies))
  }
  _renderMovies = () => {
    return this.state.map((movie, index) =>
      <Movie
        key={index}
        title={movie.title_english}
        poster={movie.medium_cover_image}
        genres={movie.genres}
        synopsis={movie.synopsis}
      />)
  }
  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : 'Loading'}
      </div>
    )
  }
}

export default App;
