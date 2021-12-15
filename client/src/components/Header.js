import React from 'react'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav, Badge } from 'react-bootstrap'






const Header = () => {

    const cartBasket = useSelector(state=>state.cartBasket)
    const {cartBasketNum} = cartBasket
    // const [cartNum, setCartNum] = useState(null)
    const getCartNr = ()=>{
        const nr = cartBasketNum.reduce((cum, item)=>Number(item.num) + cum, 0)
        return nr
    } 
    

    

    return (
        <header className='navbar-top'>
            <Navbar  variant='dark' expand='lg' collapseOnSelect>
                <Container>
                    <Link to='/'>
                        <Navbar.Brand>
                            Saucy Pizza
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='ms-auto '>
                            <Link to='/cart'>
                                <i className='fas fa-shopping-cart'/> Cart <Badge pill bg bsPrefix='cartNr' >{getCartNr()}</Badge>
                            </Link>
                            <Link to='/pizzas'>
                                Pizzas
                            </Link>
                            <Link to='/pizzas'>
                                Contact
                            </Link>
                            <Link to='/pizzas'>
                                About Us
                            </Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
