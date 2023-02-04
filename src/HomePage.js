import React from "react";
import img1 from "./img/bussiness1.jpg";
import img2 from "./img/bussiness2.jpg";
const HomePage = () => {
  return (
    <>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={img1} alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={img1} alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={img2} alt="Third slide" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <br />

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div class="jumbotron">
              <h1 class="display-4">Hello, world!</h1>
              <p class="lead">
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <hr class="my-4" />
              <p>
                It uses utility classes for typography and spacing to space
                content out within the larger container.
              </p>
              <p class="lead">
                <a class="btn btn-primary btn-lg" href="#" role="button">
                  Learn more
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div class="jumbotron">
              <h1 class="display-4">Hello, world!</h1>
              <p class="lead">
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <hr class="my-4" />
              <p>
                It uses utility classes for typography and spacing to space
                content out within the larger container.
              </p>
              <p class="lead">
                <a class="btn btn-primary btn-lg" href="#" role="button">
                  Learn more
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div class="jumbotron">
              <h1 class="display-4">Hello, world!</h1>
              <p class="lead">
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <hr class="my-4" />
              <p>
                It uses utility classes for typography and spacing to space
                content out within the larger container.
              </p>
              <p class="lead">
                <a class="btn btn-primary btn-lg" href="#" role="button">
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
