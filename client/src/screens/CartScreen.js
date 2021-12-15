import React, {useEffect, useState} from 'react'
import Header from '../components/Header'
import {useSelector, useDispatch} from 'react-redux'
import {Card, Row,Col, ListGroup, Image, FormControl} from 'react-bootstrap'
import { addCartNumber } from '../actions/cartActions'
import { REMOVE_FROM_CART } from '../types/cartTypes'





const CartScreen = () => {

    const cartBasket = useSelector(state=>state.cartBasket)
    const {cartBasketNum, loading} = cartBasket;

    const dispatch = useDispatch()

    const totalQty = ()=>{
        const tQty = cartBasketNum.reduce((sum, item)=>parseInt(item.num) + sum, 0)
        return tQty
    }

    const totalPrice = ()=>{
        const tPrice = cartBasketNum.reduce((sum, item)=>(item.num*item.price) + sum, 0).toFixed(2)
        return tPrice
    }

    const removeFromCart = (id)=>{
        dispatch({type:REMOVE_FROM_CART, payload:id})
    }

    return (
        <Row>
            <Col md={6}>
                <ListGroup variant='flush' className='my-3 mx-3'>
                    {cartBasketNum.map((item=>(
                        <ListGroup.Item key={item.id} className='mb-2'>
                            <Row>
                                <Col>
                                    <Image src={item.image} alt={item.name} fluid/>
                                </Col>
                                <Col>
                                     {item.name}
                                </Col>
                                
                                <Col>
                                     ${item.price}
                                </Col>
                                <Col>
                                    <FormControl as='select' value={item.num} onChange={(e)=>dispatch(addCartNumber(item.id, Number(e.target.value)))}>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>

                                    </FormControl>
                                </Col>
                                <Col className='trash'>
                                    <i className='fas fa-trash trashCan' onClick={()=>removeFromCart(item.id)}/>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    )))}
                </ListGroup>
            </Col>
            <Col md={6}>
                <Card className='my-3 mx-3' >
                    
                    
                        <ListGroup.Item>
                            Total Quantity: {totalQty()}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Total Price: ${totalPrice()}
                        </ListGroup.Item>
                        
                        
                   
                    
                </Card>
            </Col>
        </Row>

    )
}

export default CartScreen
