import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row} from 'react-bootstrap'


const Footer = () => {
    return (
        <footer>
               
                    <Container>

                        <Row >
                            <ul>
                                <li><Link to='/about'>About Us</Link></li>
                                <li style={{marginLeft:'1rem'}}><Link to='/contact'>Contact</Link></li>
                            </ul>
                        </Row>
                        <Row >
                            
                                <p>All Rights Reserved &copy; 2022 Saucy Pizza</p>
                            
                            
                        </Row>
                        
                        
                        

                    </Container>
                
        </footer>
    )
}

export default Footer
