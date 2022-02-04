import React from 'react';

export default function Movie(props) {
  return (
    <div
      className='movie'
      style={{ backgroundColor: props.movie.color }}
      onClick={() => props.handleDeleteMovie && props.handleDeleteMovie(props.movie.id)}>
      <h3>{props.movie.title}</h3>
      <p>Director:{props.movie.director}</p>
      <p>Year released: {props.movie.year}</p>
    </div>
  );
}
