import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Slide = () => {
    return (
        <div style={{position:"relative"}}>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://assets.ajio.com/cms/AJIO/WEB/04082022-D-unisex-topbannercarousel-p4-footwear-min50.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://assets.ajio.com/cms/AJIO/WEB/04082022-D-unisex-topbannercarousel-p3-accessories-upto80.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://assets.ajio.com/cms/AJIO/WEB/01082022-d-UHP-topbannercarousel-P1-brands-4080%20%20(2).jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slide