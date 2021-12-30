import React from 'react'

import { Container, Row, Col,Card } from 'react-bootstrap'

const fireWood = {id:1, src:'/pictures/burning-wood.png', text:'Perfectly Cooked'}
const ingredients = {id:2,src:'/pictures/ingr.jpg', text:'Fresh Ingredients'}
const delivery = {id:3, src:'/pictures/pizza-hut-delivery.png', text:'Fast Delivery'}

const pics = [fireWood, ingredients, delivery]

const HomeScreen = () => {
    return (
        <>
            
            <Container> 
                    <Row >
                        {pics.map(pic=>(
                            <Col className='d-flex justify-content-center' key={pic.id}>
                                <Card  style={{color:'red'}}>
                                    <Card.Img  style={{width:'200px', height:'200px'}} variant='top'  src={pic.src} />
                                    <Card.Body>
                                        <Card.Title>{pic.text}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
            </Container>
        </>
            
        
        
    )
}

export default HomeScreen
