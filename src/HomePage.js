import React from "react";
import img1 from "./img/bussiness1.jpg";
import img2 from "./img/bussiness2.jpg";
const HomePage = () => {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={img1} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img1} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img2} alt="Third slide" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <br />

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="jumbotron">
              <h1 className="display-4">Welcome</h1>
              <p className="lead">Welcome to our managment system</p>
              <hr className="my-4" />
              <p>Browse product to get info</p>
              <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">
                  Learn more
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="jumbotron">
              <h1 className="display-4">Welcome</h1>
              <p className="lead">Welcome to our managment system</p>
              <hr className="my-4" />
              <p>Welcome to our managment system</p>
              <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">
                  Learn more
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="jumbotron">
              <h1 className="display-4">Welcome</h1>
              <p className="lead">Welcome to our managment system</p>
              <hr className="my-4" />
              <p>Welcome to our managment system</p>
              <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
