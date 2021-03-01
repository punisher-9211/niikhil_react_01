import React from "react";
import "../index.css";

const Slider = props => {
  return (
    <div>
      <div id="slider" data-interval="3000">
        <div id="headerSlider" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li
              data-target="#headerSlider"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#headerSlider" data-slide-to="1"></li>
            <li data-target="#headerSlider" data-slide-to="2"></li>
            <li data-target="#headerSlider" data-slide-to="3"></li>
            <li data-target="#headerSlider" data-slide-to="4"></li>
            <li data-target="#headerSlider" data-slide-to="5"></li>
            <li data-target="#headerSlider" data-slide-to="6"></li>
          </ol>

          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="2.jpeg" class="proj_image" alt="..." />
              <div class="description">
                <div class="desc-text">
                  <h5 class="text-center">Project Type</h5>
                  <h2 class="text-center">Name Of Machine</h2>
                  <h4 class="text-center">Description of the project</h4>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img src="4.jpeg" class="proj_image" alt="..." />
              <div class="description">
                <div class="desc-text">
                  <h5 class="text-center">Project Type</h5>
                  <h2 class="text-center">Name Of Machine</h2>
                  <h4 class="text-center">Description of the project</h4>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img src="5.jpeg" class="proj_image" alt="..." />
              <div class="description">
                <div class="desc-text">
                  <h5 class="text-center">Project Type</h5>
                  <h2 class="text-center">Name Of Machine</h2>
                  <h4 class="text-center">Description of the project</h4>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img src="3.jpeg" class="proj_image" alt="..." />
              <div class="description">
                <div class="desc-text">
                  <h5 class="text-center">Project Type</h5>
                  <h2 class="text-center">Name Of Machine</h2>
                  <h4 class="text-center">Description of the project</h4>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img src="1.jpeg" class="proj_image" alt="..." />
              <div class="description">
                <div class="desc-text">
                  <h5 class="text-center">Project Type</h5>
                  <h2 class="text-center">Name Of Machine</h2>
                  <h4 class="text-center">Description of the project</h4>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img src="9.jpg" class="proj_image" alt="..." />
              <div class="description">
                <div class="desc-text">
                  <h5 class="text-center">Project Type</h5>
                  <h2 class="text-center">Name Of Machine</h2>
                  <h4 class="text-center">Description of the project</h4>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img src="10.jpg" class="proj_image" alt="..." />
              <div class="description">
                <div class="desc-text">
                  <h5 class="text-center">Project Type</h5>
                  <h2 class="text-center">Name Of Machine</h2>
                  <h4 class="text-center">Description of the project</h4>
                </div>
              </div>
            </div>
          </div>

          <a
            class="carousel-control-prev"
            href="#headerSlider"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#headerSlider"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Slider;
