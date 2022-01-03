import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {Card, Row, Col, ListGroup,  FormControl, Button, Table} from 'react-bootstrap'
import { createOrder } from '../actions/orderActions'



const PlaceOrderScreen = () => {


    const dispatch = useDispatch()
    const navigate = useNavigate()

    const cartBasket = useSelector(state=>state.cartBasket)
    const {cartBasketNum} = cartBasket;

    const userLogin = useSelector(state=>state.userLogin)
    const {userInfo} = userLogin

    const orderCreate = useSelector(state=>state.orderCreate)
    const{success, order} = orderCreate
    

    const [shippingAddress, setShippingAddress] = useState('')
    

    useEffect(()=>{
        if(!userInfo){
            navigate('/login')
        }

            if(success){
                navigate(`/order/${order._id}`)
            }
        
    },[userInfo, navigate, success, order])

    const totPrice = ()=>{
        const tPrice =  cartBasketNum.reduce((sum, item)=>(sum + item.price * item.num),0).toFixed(2)
        return tPrice
    } 

    const totQty = ()=>{
        const tQty = cartBasketNum.reduce((sum, item)=> sum + Number(item.num), 0)
        return tQty
    }
    const totalPrice = Number(totPrice())
    
    const handleSubmit = ()=>{
        if(!shippingAddress){
            alert('Shipping Address Missing')
            return
        }else{
            dispatch(createOrder({orderItems:cartBasketNum,shippingAddress, totalPrice }))
            
        }
        
    }
    
    
    return (
        
        <>
            <h1>Your Order</h1>
            <Row>
                
                <Col md={6}>
                    
                    <Card className='p-3'>
                        <Card.Title>Customer Info:</Card.Title>
                        <ListGroup>
                            <ListGroup.Item>
                                Name: {userInfo.name}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Address: 
                                <FormControl placeholder='Your delivery address...' value={shippingAddress} onChange={(e)=>setShippingAddress(e.target.value)}></FormControl>
                            </ListGroup.Item>

                        </ListGroup>
                        
                    </Card>
                </Col>
                <Col  md={6}>
                        <Card className='p-3'>
                            <Card.Title>Pizzas for delivery:</Card.Title>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                        {cartBasketNum.map((item=>(
                                            <tr>
                                                <td>{item.name}</td>
                                                <td>${item.price}</td>
                                                <td>{item.num}</td>
                                            </tr>
                                            
                                
                            )))}
                                
                                </tbody>
                                <thead>
                                    <tr>
                                        <th>Total Price: </th>
                                        <th>${totPrice()}</th>
                                        <th>{totQty()}</th>
                                    </tr>
                                </thead>
                            </Table>
                            

                    </Card>
                    
                    
                </Col>
                
            </Row>
            <Button  onClick={handleSubmit}>Pay Order</Button>
        </>
    )
}

export default PlaceOrderScreen
