import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Form,Button,} from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'
import { getUserById, updateUser } from '../actions/userActions'
import FormContainer from '../components/FormContainer'
import { USER_UPDATE_RESET } from '../types/userTypes'

const UserEditScreen = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()
   
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)

    const userById = useSelector(state=>state.userById)
    const {loading, error, user} = userById
    

    const userUpdate = useSelector(state=>state.userUpdate)
    const {loading:loadingUpdate, error:errorUpdate, success:successUpdate} = userUpdate
    
    useEffect(()=>{
        if(successUpdate){
            dispatch({type:USER_UPDATE_RESET})
            navigate('/admin/userList')
        }else{
            if(!user.name || user._id !== params.id){
                dispatch(getUserById(params.id))
            }else{
                setName(user.name)
                setEmail(user.email)
                setIsAdmin(user.isAdmin)
                
                
            }
            
        }
    }, [dispatch,  navigate, params, user, successUpdate])

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(updateUser({_id:params.id, name, email, isAdmin}))
        
        
    }

    return (
        <>
            <h3>Edit User</h3>
            {loadingUpdate && <h3>Loading...</h3>}
            {errorUpdate && <h3>{errorUpdate}</h3>}
            {loading ? <h3>Loading...</h3> : error ? <h3>{error}</h3> : (
                <FormContainer >
                    <Form onSubmit={handleSubmit}>
                    
                        <Form.Group controlId='name'>
                            <Form.Label>Name: </Form.Label>
                            <Form.Control value={name} onChange={(e)=>setName(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId='email'>
                            <Form.Label>Email: </Form.Label>
                            <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId='isadmin'>
                            
                            <Form.Check 
                                label='Is Admin'
                                type='checkbox' 
                                checked={isAdmin} 
                                onChange={(e)=>setIsAdmin(e.target.checked)}>
                            </Form.Check>
                        </Form.Group>
                    
                    
                        <Button type='submit'>Update User</Button>
                    </Form>
                </FormContainer>
            ) }
        </>
    )
}

export default UserEditScreen
