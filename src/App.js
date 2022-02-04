import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movieFormYearReleased, setMovieFormYearREleased] = useState('');
  const [movieFormDirector, setMovieFormDirector] = useState('');
  const [movieTitle, setMovieTitle] = useState('');
  const [movieFormColor, setMovieFormColor] = useState('pink');

  function submitMovie(e) {
    e.preventDefault();

    const newMovie = {
      id: Math.ceil(Math.random() * 9999),
      title: movieTitle,
      director: movieFormDirector,
      color: movieFormColor,
      year: movieFormYearReleased,
    };

    setAllMovies([...allMovies, newMovie]);

    setMovieFormColor('pink');
    setMovieTitle('');
    setMovieFormDirector('');
    setMovieFormYearREleased('');
  }

  function handleDeleteMovie(id) {
    const index = allMovies.findIndex(movie => movie.id === id);
    allMovies.splice(index, 1);
    setAllMovies([...allMovies]);
  }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
