import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Row, Col} from 'react-bootstrap'



const SinglePizza = ({pizza}) => {
   
  
    return (
        <Card bsPrefix='singleCard' className='my-3 p-3'>
            <Row>
                <Col>
                    <Link to={`/pizza/${pizza._id}`}>
                        <Card.Img src={pizza.image} rounded/>
                    </Link>
                </Col>
                <Col>
                    <Card.Body >
                        <Card.Title>
                            {pizza.name}
                        </Card.Title>
                        
                        <Card.Text >
                            <strong>${pizza.price}</strong>
                            
                        </Card.Text>
                        <Card.Text>
                             <a href={`/pizza/${pizza._id}`}> see more </a>
                            
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
            
            
            
        </Card>
    )
}

export default SinglePizza
