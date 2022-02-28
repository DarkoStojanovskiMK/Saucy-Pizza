import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {Card, Row,Col, ListGroup, Image, FormControl,Button} from 'react-bootstrap'
import { addCartNumber } from '../actions/cartActions'
import { REMOVE_FROM_CART } from '../types/cartTypes'


const CartScreen = () => {

    const cartBasket = useSelector(state=>state.cartBasket)
    const {cartBasketNum} = cartBasket;

    const userLogin = useSelector(state=>state.userLogin)
    const {userInfo} = userLogin

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const totalQty = ()=>{
        const tQty = cartBasketNum.reduce((sum, item)=>parseInt(item.num) + sum, 0)
        return tQty
    }

    const totalPrice = ()=>{
        const tPrice = cartBasketNum.reduce((sum, item)=>(item.num*item.price) + sum, 0).toFixed(2)
        return tPrice
    }

    const removeFromCart = (pizza)=>{
        dispatch({type:REMOVE_FROM_CART, payload:pizza})
        console.log(cartBasketNum);
        
    }

    const placeOrder = ()=>{
        if(!userInfo){
            navigate('/login')
        }else{
            navigate('/placeOrder')
        }
        
    }
    return (
        <Row>
            <Col md={6}>
                <Card>
                    <ListGroup variant='flush'  >
                        {cartBasketNum.map((item=>(
                            <ListGroup.Item key={item.pizza} className='my-2'>
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
                                        <i className='fas fa-trash trashCan' onClick={()=>removeFromCart(item.pizza)}/>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        )))}
                    </ListGroup>
                </Card>
                
            </Col>
            <Col md={6}>
                <Card  >
                    <ListGroup variant='flush' >
                        <ListGroup.Item>
                            Total Quantity: {totalQty()}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Total Price: ${totalPrice()}
                        </ListGroup.Item>
                    </ListGroup>
                        
                </Card>
                <Card className='my-3'>
                    <ListGroup.Item>
                            <Button onClick={placeOrder}>Place Order</Button>
                    </ListGroup.Item>
                </Card>
            </Col>
        </Row>

    )
}

export default CartScreen
