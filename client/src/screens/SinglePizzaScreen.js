import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Card, Col, Form, ListGroup, Row, Button} from 'react-bootstrap'
import { getSinglePizza } from '../actions/pizzaActions'
import {useParams, useNavigate} from 'react-router-dom'
import { addCartNumber } from '../actions/cartActions'

const SinglePizzaScreen = () => {
    const params = useParams()
    const [num, setNum] = useState(1)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const singlePizza = useSelector(state=>state.singlePizza)
    const {loading, pizza, error} = singlePizza

    useEffect(()=>{

        dispatch(getSinglePizza(params.id))
    },[dispatch, params.id])
    
    const submitHandler = (e)=>{
        e.preventDefault()
        dispatch(addCartNumber(pizza._id, num))
        
    }

    const goToCart = ()=>{
        
        navigate('/cart')
    }
    return (
        <>
            {loading ? (<h3>Loading...</h3>) : error ? (<h3>{error}</h3>) : (
            
                <Row>
                    
                    <Col md={6} >
                        <Card className='p-3 m-3'>
                            <Card.Img src={pizza.image} alt={pizza.name}/>
                            <Card.Header><strong>{pizza.name}</strong></Card.Header>
                            <ListGroup >
                                
                                <ListGroup.Item >
                                   <strong>Ingredients:</strong> {pizza.ingredients}
                                    
                                </ListGroup.Item>
                                <ListGroup.Item >
                                    <strong>Pizza dough:</strong> {pizza.dough}
                                    
                                </ListGroup.Item>
                                <ListGroup.Item >
                                    <strong>Price:</strong> ${pizza.price}
                                </ListGroup.Item>
                            </ListGroup>
                            
                        </Card>
                    </Col>
                    <Col>
                        <Card className='p-3 m-3'>
                            
                            <Form onSubmit={submitHandler}>
                                <ListGroup.Item>
                                    <Row>
                                        <Col sm={4}>
                                            Number of pizzas:
                                        </Col>
                                        <Col>
                                            <Form.Control as='select' value={num} onChange={(e)=>setNum(e.target.value)}>
                                        
                                                <option value={1}>1</option>
                                                <option value={2}>2</option>
                                                <option value={3}>3</option>
                                                <option value={4}>4</option>
                                                <option value={5}>5</option>
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                
                            
                                
                                <ListGroup.Item >
                                   <Button type='submit'>Add To Cart</Button>
                                   <Button onClick={()=>goToCart()}>Go To Cart</Button>
                                </ListGroup.Item>
                            
                           </Form>
                        </Card>
                    </Col>
                </Row>
            
            )} 
                
        </>
    )
}

export default SinglePizzaScreen
