import React from 'react';
import '../style/LogIn.css';
import logo from '../Assets/Images/Logo.png'
import { FaLock, FaPhotoVideo, FaRegUser } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import Image from 'react-bootstrap/Image'
import registrationImage from '../Assets/Images/register3.png';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            {/* <h1>This is registration page</h1> */}
            <div className='jabed'>

                <div>
                    <Image className='img'
                        src={registrationImage}
                    ></Image>
                </div>
                <div class="content">

                    <div>
                        {/* <!--Image & Title--> */}
                        {/* <div className='loginImg'><img src={logo}></img></div> */}
                        <span className='loginImg'><Image
                            src={logo}
                        >

                        </Image></span>
                        <div class="text">Please Register</div>
                        <Form action="#">
                            {/* <!--Email & password input place--> */}
                            <div class="field mb-3">
                                <span className='ps-3'><FaRegUser></FaRegUser></span>
                                <input type="text" placeholder='Name' required />

                            </div>
                            <div class="field mb-3">
                                <span className='ps-3'><FaPhotoVideo></FaPhotoVideo></span>
                                <input type="text" placeholder='Photo URL' required />

                            </div>
                            <div class="field mb-3">
                                <span className='ps-3'><AiFillMail></AiFillMail></span>
                                <input type="email" placeholder='Email Id' required />

                            </div>
                            <div class="field mb-3">
                                <span className='ps-3'><FaLock></FaLock></span>
                                <input type="password" name="" id="" placeholder='Password' />
                            </div>
                            <span className='ms-2 '>Already have an account? <Link to='/login' className='noDecoration'>LogIn</Link></span>
                            <button className='button mt-1'>Register</button>

                            {/* <!--login & outer button--> */}
                        </Form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;