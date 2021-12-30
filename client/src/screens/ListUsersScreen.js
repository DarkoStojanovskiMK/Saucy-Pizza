import React, {useEffect} from 'react'
import {useSelector, useDispatch } from 'react-redux'
import {useNavigate} from 'react-router'
import { deleteUser, listUsers } from '../actions/userActions'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Table, Button } from 'react-bootstrap'




const ListUsersScreen = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userLogin = useSelector(state=>state.userLogin)
    const {userInfo} = userLogin

    const userList = useSelector(state=>state.userList)
    const {users, loading, error} = userList

    const userDelete = useSelector(state=>state.userDelete)
    const {success} = userDelete

    useEffect(()=>{
        if(userInfo && userInfo.isAdmin){
            dispatch(listUsers())
        }else{
            navigate('/login')
        }

        
    },[dispatch, success, navigate, userInfo])

    const deleteHandler = (id)=>{
        if(window.confirm('Are you sure?')){
            dispatch(deleteUser(id))
        }
    }


    return (
        
        <>
            {loading && <h3>Loading...</h3>}
            {error && <h3>{error}</h3>}
            <Container>
                <Table responsive className='table-sm' >
                    <thead> 
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user=>(
                            <tr key={user._id}>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.isAdmin ? 
                                    <i className='fas fa-check' style={{color:'green'}}></i>:
                                    <i className='fas fa-check' style={{color:'red'}}></i>}
                                </td>
                                <td>
                                    <LinkContainer to={`/admin/user/${user._id}/edit`}>
                                        <Button variant='light' className='btn-sm'>
                                            <i className='fas fa-edit'></i>
                                        </Button>
                                    </LinkContainer>
                                    <Button variant='danger' className='btn-sm' onClick={()=>deleteHandler(user._id)}>
                                            <i className='fas fa-trash'></i>
                                    </Button>
                                </td>
                            </tr>
                ))}
                    </tbody>
                </Table>
                
            </Container>

        </>
    )
}

export default ListUsersScreen
