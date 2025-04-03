import React from "react";
import About from "./About";

const LandingPage = () => {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel"
      >
        <div className="carousel-indicators" style={{justifySelf:"center", }}>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner px-5" style={{width:"80%", height:"50%", justifySelf:"center"}}>
          <div className="carousel-item active">
            <img src="/images/1.jpg" className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src="/images/2.jpg" className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src="/images/3.jpg" className="d-block w-100" alt="Slide 3" />
          </div>
          <div className="carousel-item">
            <img src="/images/4.jpg" className="d-block w-100" alt="Slide 3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" style={{backgroundColor:"black"}}></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" style={{backgroundColor:"black"}}></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <About/>
      </>    
  );
};

export default LandingPage;
