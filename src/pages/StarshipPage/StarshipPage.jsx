import React from 'react';
import { Link } from 'react-router-dom';
import './StarshipPage.css';

const StarshipPage = (props) => {
  
  const starship = props.getStarship(props.match.params.idx);
  
  return (
    <div className='StarshipPage'>
      {starship ?
        <div className='StarshipPage-starship'>
          <span>NAME:</span>
          <span>{starship.name}</span>
          <span>MODEL:</span>
          <span>{starship.model}</span>
          <Link to='/'><i class="fas fa-hand-point-left"> <em>back</em></i></Link>
        </div>
        :
        <h3>Loading...</h3>
      }
    </div>
  );
};

export default StarshipPage;