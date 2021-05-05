import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav } from 'react-bootstrap'
import "./styles.scss"
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/action/auth.action';
/**
* @author
* @function Header
**/

const Header = (props) => {

  const auth=useSelector(state=>state.auth);
  const dispatch=useDispatch();

  return(
    
                            <Navbar className="navigation" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand className="brand" href="/">Webchat</Navbar.Brand>
                                
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                
                                <Navbar.Collapse id="basic-navbar-nav">
                              
                                  <Nav className="text">Hi,{auth.authenticated?`${auth.firstName} ${auth.lastName}`:`Rupayan`} here</Nav>
                                  
                                
                                
                                    {
                                    (!(auth.authenticated)) ?
                                    <Nav className="ml-auto right-menu">
                                    <Nav.Link href="/login">Login</Nav.Link>
                                    <Nav.Link href="/register">Sign-Up</Nav.Link>
                                    </Nav>:
                                    null}
                                    {
                                      (auth.authenticated)?
                                      <Nav className="ml-auto right-menu">
                                      <Nav.Link onClick={()=>dispatch(logOut(auth.uid))}>Logout</Nav.Link>
                                      </Nav>:null
                                    }
                                    
                                </Navbar.Collapse>
                            </Navbar>
                          
                           
                       
                   
            

    
    
   )

 }

export default Header