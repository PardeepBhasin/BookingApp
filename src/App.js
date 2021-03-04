import React, {useEffect, useState} from 'react';
import './App.css';
import MovieSection from './renderMovie';
import EventList from './EventList';
import history from './history';

function App() {
  const [selectedMovieType, setMovieType] = useState(null);
  var slideIndex = 1;
  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex])
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slides.length > 0) {
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
    }
   
  }
  const renderMovieSection = (movieType) => {
    setMovieType(movieType);
  }
  return (
      <div>
        { selectedMovieType !== null && selectedMovieType === 'events' && <EventList/> }
        { selectedMovieType !== null && selectedMovieType !== 'events' && <MovieSection type={selectedMovieType} /> }
        {selectedMovieType === null && <div>
          <div className="movieContainer">
            <div className="item" onClick={() => {renderMovieSection('latest')}}>Latest Movies</div>
            <div className="item" onClick={() => {renderMovieSection('upcomingMovies')}}>Upcoming Movies</div>
            <div className="item" onClick={() => {renderMovieSection('events')}}>Nearby Events</div>
          </div>
          <div className="sliderWrapper">
            <div className="slideshow-container">
              <div className="mySlides">
                <div className="numbertext">1 / 3</div>
                <img src="../img1.jpg" className="imageWidth"/>
                <div className="text">Movie Image Slider</div>
              </div>
              <div className="mySlides">
                <div className="numbertext">2 / 3</div>
                <img src="../img2.jpg" className="imageWidth"/>
                <div className="text">Movie Image Slider</div>
              </div>
              <div className="mySlides">
                <div className="numbertext">3 / 3</div>
                <img src="../img3.jpg" className="imageWidth"/>
                <div className="text">Movie Image Slider</div>
              </div>
              <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
              <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
            </div>
            <br/>
            <div className="alignText">
              <span className="dot" onClick={() => currentSlide(1)}></span>
              <span className="dot" onClick={() => currentSlide(2)}></span>
              <span className="dot" onClick={() => currentSlide(3)}></span>
            </div>
          </div>
          <div className="recommendedText">
            <h2>Recommended Movies</h2>
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
        </div> }
      </div>
  );
}

export default App;
