import React from 'react'
import { Link } from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'


// 007/2
const ProductScreen = ({test}) => {
  // const product = products.find(p => p._id === test.params.id);
  // console.log(test.params.id)
  console.log(test)
  return (
    <div>
    {/* {product.name} */}
    <Link className='btn btn-light my-3' to='/about'>Go Back</Link>
    <Row>
      <Col md={6}>
        <Image src='/images/playstation.jpg' alt='image name' />
      </Col>
      <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>product name</h3>
              {/* <h3>{product.name}</h3> */}
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
              value='product.rating' text='Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space. Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space.Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space. Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space.' /> 
              <h4> Price: $29.99</h4>
            </ListGroup.Item>
          </ListGroup>
      </Col>
    </Row>
    </div>
  )
}

export default ProductScreen
