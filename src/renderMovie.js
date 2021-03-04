import React from 'react';
import './App.css';
import history from './history';

const MovieSection = ({type}) => {
    let movieType = '';
    if (type === 'latest') {
        movieType = 'LatestMovies';
    } else if (type === 'upcomingMovies') {
        movieType = 'Upcoming Movies';
    } else {
        movieType = 'Nearby Events';
    }
    return (
        <div>
            <div className="recommendedText">
                <h2>{movieType}</h2>
            </div>
            <div className="recommendedMovies">
                <div className='movieBox'>
                    <span>Movie 1</span>
                    <button className="btn" onClick={() => history.push('/movieDetails')}>Book</button>
                </div>
                <div className='movieBox'>
                    <span>Movie 2</span>
                    <button className="btn" onClick={() => history.push('/movieDetails')}>Book</button>
                </div>
                <div className='movieBox'>
                    <span>Movie 3</span>
                    <button className="btn" onClick={() => history.push('/movieDetails')}>Book</button>
                </div>
                <div className='movieBox'>
                    <span>Movie 4</span>
                    <button className="btn" onClick={() => history.push('/movieDetails')}>Book</button>
                </div>
            </div>
        </div>
    )
}

export default MovieSection;