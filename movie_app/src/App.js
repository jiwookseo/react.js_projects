import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  state = {
    greeting: 'hello!',
    movies: [
      {
        title: "Matrix",
        poster: "https://cdn3.movieweb.com/i/article/xOw6msJtL2YtlnEra7vglma6eLW0yP/1200:100/Matrix-Movie-Code-Secret-Sushi-Recipes.jpg",
      },
      {
        title: 'Oldboy',
        poster: "https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/2SaY/image/Bqx0WFKTpvrxal3QiYNotjUAN6o.jpg",
      },
      {
        title: 'Endgame',
        poster: "https://assets1.ignimgs.com/2019/05/18/avengersendgame-thor-2weapons-1280-1558142343257_1280w.jpg",
      },
    ],
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          ...this.state.movies,
          {
            title: 'Endgame2',
            poster: "https://assets1.ignimgs.com/2019/05/18/avengersendgame-thor-2weapons-1280-1558142343257_1280w.jpg",
          }
        ]
      })
    }, 2000)
  }

  render() {
    return (
      <div className="App">
        {this.state.greeting}
        {this.state.movies.map((movie, index) =>
          <Movie title={movie.title} poster={movie.poster} key={index} />
        )}
      </div>
    )
  }
}

export default App;
