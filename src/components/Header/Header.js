import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
// import { Container, Nav, Navbar } from 'react-bootstrap';
import {Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css';

const Header = () => {
    const{user,logout}=useAuth();
  


    return (

        
            
          <>
              
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
            <h4 className='text-light px-3'>Unity <span>HOSPITAL</span></h4>
                <Container className='text-light' >
                    <Navbar.Toggle />

                        <Navbar.Collapse className="justify-content-end px-4 " >
                       
                        
                        <Nav.Link className='text-light' as={Link} to="/home#home">Home</Nav.Link>
                        <Nav.Link className='text-light'  as={Link} to="/services#services">Services</Nav.Link>
                        <Nav.Link className='text-light'  as={Link} to="/about#about">About Us</Nav.Link>
                        <Nav.Link  className='text-light' as={Link} to="/contact#contact">Contact Us</Nav.Link>
                        {
                            user?.email?
                            <Button className='text-light mx-2' onClick={logout} variant="dark">Logout</Button>:
                            <Nav.Link  className='text-light mx-2' as={Link} to="/login">Login</Nav.Link>}
                   
                            <Navbar.Text>
                               { user.displayName && <a href="#login">Signed in as : {user?.displayName}</a>}
                            </Navbar.Text>
                        </Navbar.Collapse>
                   
                </Container>
            </Navbar>
           
            </>
    
        
    );
};

export default Header;


 /*
            
            
            
            
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/services'>Services</NavLink>
            <NavLink to='/about'>About Us</NavLink>
            <NavLink to='/contact'>Contact Us</NavLink>*/
 