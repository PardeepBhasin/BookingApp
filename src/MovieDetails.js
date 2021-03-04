import React from 'react';
import './App.css';
import history from './history';

const MovieDetails = () => {
    return (
        <div className="detailWrapper">
           <div className="movieImageSection">Movie Image</div>
           <div className="movieDetails">
               <div className='content'>
                    <div className="movieName">Movie Name</div>
                    <div className="releaseDate">Released Date</div>
               </div>
               <div className='movieItems'>Movie Duration</div>
               <div className='movieItems'>Ratings</div>
           </div>
           <button className="btn" onClick={() => history.push('/bookingPage')}>Book Now</button>
        </div>
    )
}

export default MovieDetails;