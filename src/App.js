import './App.css';
import { useState, useEffect } from 'react';
import Movie from './Movie';

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movieFormYearReleased, setMovieFormYearREleased] = useState('');
  const [movieFormDirector, setMovieFormDirector] = useState('');
  const [movieTitle, setMovieTitle] = useState('');
  const [movieFormColor, setMovieFormColor] = useState('pink');
  const [currentFilter, setFilter] = useState('');

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

  useEffect(() => {
    const filteredMovies = allMovies.
      filter(movie =>
        movie.title.includes(currentFilter)
        || movie.director.includes(currentFilter)
        || movie.year < (currentFilter)
        || movie.color === (currentFilter));
    setFilteredMovies(filteredMovies);
  }, [currentFilter, allMovies]);

  return (
    <div className="App">
      <div className='current-movie'>
        <Movie movie={{
          title: movieTitle,
          director: movieFormDirector,
          year: movieFormYearReleased,
          color: movieFormColor
        }} />
      </div>
    </div>
  );
}

export default App;
