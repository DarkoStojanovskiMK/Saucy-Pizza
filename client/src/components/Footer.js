import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Row, Col } from 'react-bootstrap'


const Footer = () => {
    return (
        <footer>
               
                    <Container>

                        <Row className='ms-auto'>
                            <Navbar.Text >
                                All Rights Reserved
                            </Navbar.Text>
                            <Col>
                                <Link to='/pizzas'>
                                    About
                                </Link>
                            </Col>
                            <Col>
                                <Link to='/pizzas'>
                                    About
                                </Link>
                            </Col>
                        </Row>
                        
                        <Row>
                            <Navbar.Text >
                                All Rights Reserved
                            </Navbar.Text>
                            <Col>
                                <Link to='/pizzas'>
                                    About
                                </Link>
                            </Col>
                            <Col>
                                <Link to='/pizzas'>
                                    About
                                </Link>
                            </Col>
                        </Row>
                        

                    </Container>
                
        </footer>
    )
}

export default Footer
