import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const NavBar = () => {
    return (
        <Navbar bg="danger" variant="dark">
            <Container className="justify-content-start">
                <Link to="/" className="text-white ms-3 text-decoration-none">
                🏠 Home
                </Link>
                <Link to="/contact" className="text-white ms-3 text-decoration-none">
                📒 Contacto
                </Link>
              </Container>    
              <Navbar.Brand>Happy Cake  🍰</Navbar.Brand>
          
        </Navbar>
    )
}

export default NavBar
