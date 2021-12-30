import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Form, FormControl, FormGroup, FormLabel, Row, Col, Button } from 'react-bootstrap'
import {register} from '../actions/userActions'

const RegisterScreen = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    const handleSubmit = (e)=>{
        e.preventDefault()
        if(password !== confirmPassword){
            alert('Passwords do not match')
        }else{
            dispatch(register(name,email,password))
            navigate('/')
        }
        
        
        
    }

    return (

        <Row>
            <Col md={6}>
                <h3>Register Form</h3>
                <Form className='my-4' onSubmit={handleSubmit}>
                    
                    <FormGroup>
                        <FormLabel>Name</FormLabel>
                        <FormControl type='text' placeholder='Your Name' value={name} onChange={(e)=>setName(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Email</FormLabel>
                        <FormControl type='email' placeholder='Your Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Password</FormLabel>
                        <FormControl type='password'  placeholder='Your Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl type='password'  placeholder='Confirm Password' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
                    </FormGroup>
                    <div className='d-grid gap-2 my-3'>
                        <Button type='submit' variant='dark'>Submit</Button>
                    </div>
                    

                </Form>
                
            </Col>
        </Row>
        
    )
}

export default RegisterScreen
