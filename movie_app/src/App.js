import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';
import { thisExpression } from '@babel/types';
import Axios from 'axios';

class App extends Component {
  state = {
  }

  componentDidMount() {
    Axios.get('https://yts.am/api/v2/list_movies.json?sort_by=rating')
      .then(res => this.setState({movies: res.data.data.movies}))
  }
  _renderMovies = () => {
    return this.state.movies.map((movie, index) => <Movie title={movie.title} poster={movie.medium_cover_image} key={index} />)
  }
  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'loading'}
      </div>
    )
  }
}

export default App;
