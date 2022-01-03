import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Navbar, Container, Nav, Badge,NavDropdown} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { logout } from '../actions/userActions'






const Header = () => {
    const dispatch=useDispatch()
    const cartBasket = useSelector(state=>state.cartBasket)
    const {cartBasketNum} = cartBasket

    const userLogin = useSelector(state=>state.userLogin)
    const {userInfo} = userLogin
    
    const getCartNr = ()=>{
        const nr = cartBasketNum.reduce((sum, item)=>Number(item.num) + sum, 0)
        return nr
    } 
    const logoutHandler = ()=>{
        dispatch(logout())
    }


    return (
        <header className='navbar-top'>
            <Navbar  variant='dark' expand='lg' collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>
                            Saucy Pizza
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='ms-auto '>
                            <LinkContainer to='/pizzas'>
                               <Nav.Link>Pizzas</Nav.Link> 
                            </LinkContainer>
                            <LinkContainer to='/cart'>
                                <Nav.Link><i className='fas fa-shopping-cart'/> Cart <Badge pill bg bsPrefix='cartNr' >{getCartNr()}</Badge></Nav.Link>
                            </LinkContainer>
                            {userInfo ? (
                                <NavDropdown title={userInfo.name} id='username'>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item> Profile</NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                                </NavDropdown>
                                ) : (
                                <LinkContainer to='/login'>
                                    <Nav.Link> Sign In </Nav.Link>
                                </LinkContainer>)
                            }
                            {userInfo && userInfo.isAdmin && (
                             <NavDropdown title='Admin' id='adminmenu'>
                                <LinkContainer to='/admin/userList'>
                                   <NavDropdown.Item>Users</NavDropdown.Item> 
                                </LinkContainer>
                               
                            </NavDropdown>
                            ) }
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
