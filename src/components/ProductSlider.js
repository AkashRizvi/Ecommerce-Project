import React, { Component } from "react";
import Slider from "react-slick";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <div className="container mb-3 mt-5">
        <h2 className="text-success"> Multiple items </h2>
        <Slider {...settings}>
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/images/airpods.jpg" />
              <Card.Body>
                <Card.Title> <h4>Airpods Wireless </h4></Card.Title>
                <Card.Text>
                
                </Card.Text>
                <Card.Text>
                    <p>Price: $100</p>
                </Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </div>
          <div>
          <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/images/phone.jpg" />
              <Card.Body>
                <Card.Title> <h4>Airpods Wireless </h4></Card.Title>
                <Card.Text>
                
                </Card.Text>
                <Card.Text>
                    <p>Price: $100</p>
                </Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </div>
          <div>
          <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/images/camera.jpg" />
              <Card.Body>
                <Card.Title> <h4>Airpods Wireless </h4></Card.Title>
                <Card.Text>
                
                </Card.Text>
                <Card.Text>
                    <p>Price: $100</p>
                </Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </div>
          <div>
          <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/images/playstation.jpg" />
              <Card.Body>
                <Card.Title> <h4>Airpods Wireless </h4></Card.Title>
                <Card.Text>
                
                </Card.Text>
                <Card.Text>
                    <p>Price: $100</p>
                </Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </div>
          <div>
          <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/images/mouse.jpg" />
              <Card.Body>
                <Card.Title> <h4>Airpods Wireless </h4></Card.Title>
                <Card.Text>
                
                </Card.Text>
                <Card.Text>
                    <p>Price: $100</p>
                </Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </div>
          <div>
          <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/images/alexa.jpg" />
              <Card.Body>
                <Card.Title> <h4>Airpods Wireless </h4></Card.Title>
                <Card.Text>
                
                </Card.Text>
                <Card.Text>
                    <p>Price: $100</p>
                </Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </div>
          {/* <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div> */}
        </Slider>
      </div>
    );
  }
}
