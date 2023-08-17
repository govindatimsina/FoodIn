import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../App.css";
export default function Slider() {
  return (
    <Carousel className="container-xxl sliderFonts" data-bs-theme="white">
      <Carousel.Item className="carouselItems">
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2019/01/29/18/05/burger-3962996_1280.jpg"
          alt="First slide"
          style={{ width: "100%", height: "100%", opacity: "0.9" }}
        />
        <Carousel.Caption>
          <button className="btn btn-success">Explore More</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselItems">
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg"
          alt="Second slide"
          style={{ width: "100%", height: "100%", opacity: "0.9" }}
        />
        <Carousel.Caption>
          <button className="btn btn-success">Explore More</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselItems">
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2016/12/11/22/41/lasagna-1900529_1280.jpg"
          alt="Third slide"
          style={{ width: "100%", height: "100%", opacity: "0.9" }}
        />
        <Carousel.Caption>
          <button className="btn btn-success">Explore More</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
