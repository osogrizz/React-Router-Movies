import React from 'react';

import { Link } from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <Link to="/movies/:id" className="saved-movie">{movie.title}</Link>
    ))}
    <Link to="/" className="home-button">Home</Link>
  </div>
);

export default SavedList;
