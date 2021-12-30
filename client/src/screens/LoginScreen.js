import React,{useState, useEffect} from 'react'
import { Form, FormControl, FormGroup, FormLabel, Row, Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate} from 'react-router-dom'
import {login} from '../actions/userActions'


const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const userLogin = useSelector(state=>state.userLogin)
    const {userInfo} = userLogin

    

    useEffect(()=>{
        if(userInfo){
            navigate('/')
        }
    }, [userInfo, navigate])

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(login(email, password))
        
    }
    
    return (

        <Row>
            <Col md={6}>
                <h3>Login Form</h3>
                <Form onSubmit={handleSubmit} className='my-4'>
                   
                    <FormGroup>
                        <FormLabel>Email</FormLabel>
                        <FormControl type='email' placeholder='Your Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Password</FormLabel>
                        <FormControl type='password' placeholder='Your Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </FormGroup>
                    <div className='d-grid gap-2 my-3'>
                        <Button type='submit' variant='dark'>Submit</Button>
                    </div>
                    

                </Form>
                <h4>Not registered? Register <a href='/register'>here</a></h4>
            </Col>
        </Row>
        
    )
}

export default LoginScreen
