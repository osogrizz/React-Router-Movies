import React from 'react';

const MovieCard = ( {movie} ) => {
  const { title, director, metascore, stars } = movie;
  console.log('MC', movie)

  return (
    <div>
      <div className="movie-card">
        <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>
      
      {stars.map(star => (
        <p key={star} className="movie-star">
          {star}
        </p>
      ))}

      <div className="save-button" onClick={movie.saveMovie}>Save</div>
      </div> 
    </div> 
  )
};

export default MovieCard;
