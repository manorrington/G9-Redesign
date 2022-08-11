import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import "./Slider.css";
const Slider = () => {
  const images = [
    "./images/JPB_Header-3_820x.webp",
    "./images/slide2.webp",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];

  return (
    <div className="slider-container">
      <Slide autoplay={false}>
        <div className="each-slide-effect">
          <div>
            <a href="https://shop.complex.com/products/haagen-dazs-bucket-hat">
              <img
                className="slideImg"
                src={require(`${images[0]}`)}
                alt={"hat"}
              />
            </a>
          </div>
        </div>
        <div className="each-slide-effect">
          <div>
            <a href="https://shop.complex.com/products/haagen-dazs-cooler-bag">
              <img
                className="slideImg"
                src={require(`${images[1]}`)}
                alt={"cooler-bag"}
              />
            </a>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Slider;
