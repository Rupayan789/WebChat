import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav } from 'react-bootstrap'
import "./styles.scss"
/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <div>
                            <Navbar className="navigation" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand className="brand" href="/">Webchat</Navbar.Brand>
                                
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                
                                <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="text">Hi,Rupayan here</Nav>
                                    <Nav className="ml-auto right-menu">
                                    <Nav.Link href="/login">Login</Nav.Link>
                                    <Nav.Link href="/register">Sign-Up</Nav.Link>
                                    <Nav.Link onClick={props.logout}>Logout</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                           
                       
                    </div>
            

    
    
   )

 }

export default Header