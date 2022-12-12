import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'
import logo from '../Assets/Images/Logo.png'
import { Link } from 'react-router-dom';
import '../style/Header.css'

const Header = () => {
    return (
        <div>
            {/* <h1>this is header section</h1> */}
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <div>
                        <Image src={logo}
                            roundedCircle
                            height={'50px'}
                            className='me-2'
                        ></Image>
                        <Navbar.Brand href="#home" ><Link to='/' className='text-warning noDecoration'>Learn IT World</Link></Navbar.Brand>
                    </div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features" className='me-3 text-color'>Blog</Nav.Link>
                            <Nav.Link href="#pricing" className='me-3 text-color'>FAQ</Nav.Link>
                            <span className='text-color'><NavDropdown title="Courses" id="collasible-nav-dropdown" className='me-3 text-color'>
                                <NavDropdown.Item href="#action/3.1">Data Science</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Artificial Intelligence and Machine Learning
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Cloud Computing</NavDropdown.Item>
                                <NavDropdown.Item />
                                <NavDropdown.Item href="#action/3.4">
                                    Networking
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.5">
                                    Software Development.
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.5">
                                    Big Data
                                </NavDropdown.Item>
                            </NavDropdown></span>
                            <Nav.Link href="#pricing" className='me-3 text-color'>Toggle</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link><Link to='/register' className='noDecoration text-color'>Register</Link></Nav.Link>
                            <Nav.Link >
                                <Link to='/login' className='noDecoration text-color'>LogIn</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link className='noDecoration text-color'>LogOut</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;