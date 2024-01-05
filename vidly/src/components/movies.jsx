import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
  state = {
    movies: getMovies(),
    count: 0
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter(m => m._id !== movie._id );
    this.setState({movies});
}

  formatCount = () => {
    const { movies } = this.state;
    const count = movies.length;
    return count === 0 ? 'No movies' : count === 1 ? '1 movie' : `${count} movies`;
  };

  render() {
    return (
      <div className="container p-2">
      <h1 className="txt-dark">My First React Project </h1>
        <p>There are <span className="text-primary">{this.formatCount()}</span> In the Database</p>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(movie)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-sm my-4">Made by Yogesh♥️</p>
      </div>
    );
  }
}

export default Movies;
