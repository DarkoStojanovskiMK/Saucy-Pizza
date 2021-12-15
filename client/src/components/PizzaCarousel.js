import React from 'react'
import {  Carousel, Image } from 'react-bootstrap'





const PizzaCarousel = () => {
    return (
        <Carousel >
                <Carousel.Item >
                    <Image style={{height:'400px', objectFit: 'cover'}} src='/pictures/pizza1.jpg' alt='pizza.jpg' fluid/> 
                     <Carousel.Caption>
                        <h3>Best pizzas in town</h3>
                        <p>Free delivery!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item  >
                    <Image style={{height:'400px', objectFit: 'cover'}} src='/pictures/pizza2.jpg' alt='pizza.jpg' fluid/> 
                    <Carousel.Caption>
                        <h3>Best pizzas in town</h3>
                        <p>Free delivery!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item  >
                    <Image style={{height:'400px', objectFit: 'cover'}} src='/pictures/pizza4.jpg' alt='pizza.jpg' fluid/> 
                    <Carousel.Caption>
                        <h3>Best pizzas in town</h3>
                        <p>Free delivery!</p>
                    </Carousel.Caption>
                </Carousel.Item>
               
            </Carousel>
    )
}

export default PizzaCarousel
