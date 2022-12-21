import React, { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'
import logo from '../Assets/Images/Logo.png'
import { Link } from 'react-router-dom';
import '../style/Header.css'
import { AuthContext } from '../Contexts/ContextApi';
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Header = () => {
    const { LogOut, user } = useContext(AuthContext);
    const [theme, setTheme] = useState('light-theme')
    const toggle = () => {
        // alert('hi')
        if (theme === 'light-theme') {
            setTheme('dark-theme')
        }
        else {
            setTheme('light-theme')
        }

    }
    useEffect(() => {
        document.body.className = theme
    }, [theme])

    const handleLogOut = () => {
        LogOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <div>
            {/* <h1>this is header section</h1> */}
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <Container>
                    <div>
                        <Image src={logo}
                            roundedCircle
                            height={'50px'}
                            className='me-2'
                        ></Image>
                        <Navbar.Brand href="#home" ><Link to='/' className='text-warning noDecoration mt-1'>Learn IT World</Link></Navbar.Brand>
                    </div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='me-3 mt-1 text-color'><Link to='/blog' className='noDecoration text-color'> Blog</Link></Nav.Link>
                            <Nav.Link className='me-3 mt-1 text-color'><Link to='/faq' className='noDecoration text-color '>FAQ</Link></Nav.Link>
                            <span className='text-color'><NavDropdown title="Courses" id="collasible-nav-dropdown" className='me-3 mt-1 text-color'>
                                <NavDropdown.Item ><Link to='/news/0282e0e58a5c404fbd15261f11c2ab6a' className='noDecoration'>Artificial Intelligence</Link></NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to='/news/0282e0e58a5c404fbd15261f11c2ab6b' className='noDecoration'> Data Science</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                    <Link to='/news/0282e0e58a5c404fbd15261f11c2ab6c' className='noDecoration'> Cloud Computing</Link>
                                </NavDropdown.Item>

                                <NavDropdown.Item >
                                    <Link to='/news/0282e0e58a5c404fbd15261f11c2ab6d' className='noDecoration'> Networking</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                    <Link to='/news/0282e0e58a5c404fbd15261f11c2ab6e' className='noDecoration'> Softwear Developing</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                    <Link to='/news/0282e0e58a5c404fbd15261f11c2ab6f' className='noDecoration'> Big Data</Link>

                                </NavDropdown.Item>
                            </NavDropdown></span>
                            <Nav.Link onClick={toggle} className='me-3 mt-1 text-color'>{theme === 'light-theme' ? <h6 className=' text-color'>Dark mood <MdDarkMode></MdDarkMode></h6> : <h6 className=' text-color'>Light mood <MdLightMode></MdLightMode></h6>}</Nav.Link>
                        </Nav>
                        <Nav>
                            {user?.displayName ? <span className='text-color mt-2 me-2'>{user.displayName}</span> : <span></span>}
                            <Image
                                src={user?.photoURL}
                                roundedCircle
                                style={{ height: 30 }}
                                className='mt-1'

                            >

                            </Image>
                            <Nav.Link><Link to='/register' className='noDecoration text-color'>Register</Link></Nav.Link>
                            {user ?
                                <Nav.Link>
                                    <Link className='noDecoration text-color' onClick={handleLogOut}>LogOut</Link>
                                </Nav.Link>
                                :
                                <Nav.Link >
                                    <Link to='/login' className='noDecoration text-color'>LogIn</Link>
                                </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;