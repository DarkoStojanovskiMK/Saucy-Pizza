import React,{useState, useEffect} from 'react'
import {  Form, FormControl, FormGroup, FormLabel, Row, Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {getUserDetails, updateUserProfile} from '../actions/userActions'
import { USER_UPDATE_PROFILE_RESET } from '../types/userTypes'



const ProfileScreen = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const userLogin = useSelector(state=>state.userLogin)
    const {userInfo} = userLogin

    const userDetails = useSelector(state=>state.userDetails)
    const {loading, error, user} = userDetails

    const userUpdateProfile = useSelector(state=>state.userUpdateProfile)
    const {success} = userUpdateProfile

    


    useEffect(()=>{
        if(!userInfo){
            navigate('/login')
        }else{
            if(!user.name || success){
               
                dispatch(getUserDetails('profile'))
                dispatch({type:USER_UPDATE_PROFILE_RESET})
            }else{
                setName(user.name)
                setEmail(user.email)
            }
        }
        
    },[userInfo, navigate, user, dispatch, success] )

    const handleSubmit =(e)=>{
        e.preventDefault()
        if(password !== confirmPassword){
            alert('Passwords do not match')
            
        }else{
            dispatch(updateUserProfile({id:user._id, name, email, password}))
        }
        
    }

    return (
        
        <Row>
            <Col md={6}>
                <h3>User Profile</h3>
                {error && <h3>{error}</h3>}
                {loading && <h3>Loading...</h3>}
                <Form onSubmit={handleSubmit} className='my-4'>
                    <FormGroup>
                        <FormLabel>Name</FormLabel>
                        <FormControl type='text' placeholder={user.name} value={name} onChange={(e)=>setName(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Email</FormLabel>
                        <FormControl type='email' placeholder={user.email} value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Password</FormLabel>
                        <FormControl type='password' placeholder='Your Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Password</FormLabel>
                        <FormControl type='password' placeholder='Confirm Password' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
                    </FormGroup>
                    <div className='d-grid gap-2 my-3'>
                        <Button type='submit' variant='dark'>Update</Button>
                    </div>
                    

                </Form>
                
            </Col>
        </Row>
    )
}

export default ProfileScreen
