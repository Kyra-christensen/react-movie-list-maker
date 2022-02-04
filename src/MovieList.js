import React from 'react';
import Movie from './Movie';

export default function MovieList(props) {
  return (
    <div className='movielist'>
      {
        props.movies.map((movie, i) => 
          <Movie key={`${movie.name}-${i}`} movie={movie} handleDeleteMovie={props.handleDeleteMovie} />)
      }
    </div>
  );
}
