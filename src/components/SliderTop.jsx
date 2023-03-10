import React from 'react'
import { Carousel } from "react-bootstrap";

function SliderTop() {
  return (
    <>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block sliderImg"
          src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block sliderImg"
          src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block sliderImg"
          src="https://www.shoeai.com/hubfs/Thumbnail-ShoeAI-Website.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </>
  )
}

export default SliderTop
