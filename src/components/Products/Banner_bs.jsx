import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import {images} from '../../Helpers/BannerData'
import { Divider } from '@material-ui/core';

const Banner_bs = () => {

    return (
        <>
        <Carousel fade  controls = {false} interval = {4000} pause = {true}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {images[0].img}
      alt="First slide"
    />
    {/* <Carousel.Caption>
    
      <p className={classes.caption}>{images[0].subtitle}</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {images[1].img}
      alt="Second slide"
    />

    {/* <Carousel.Caption>
      <p style = {{color:"black", fontFamily:'Playfair Display', fontSize:'20px' }}>{images[1].subtitle}</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {images[2].img}
      alt="Third slide"
    />

    {/* <Carousel.Caption>
    <p>{images[2].subtitle}</p>
    </Carousel.Caption> */}
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {images[3].img}
      alt="Third slide"
    />

    {/* <Carousel.Caption>
    <p>{images[3].subtitle}</p>
     
    </Carousel.Caption> */}
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {images[4].img}
      alt="Third slide"
    />

    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>{images[4].subtitle}</p>
    </Carousel.Caption> */}
  </Carousel.Item>

</Carousel>
  <Divider />
</>
    )
}

export default Banner_bs
