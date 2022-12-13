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
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        console.log(name, password, email, photoURL)

    }


    return (
        <div>
            {/* <h1>This is registration page</h1> */}
            <div className='jabed'>

                <div>
                    <Image className='img'
                        src={registrationImage}
                    ></Image>
                </div>
                <div className="content">

                    <div>
                        {/* <!--Image & Title--> */}
                        {/* <div className='loginImg'><img src={logo}></img></div> */}
                        <span className='loginImg'><Image
                            src={logo}
                        >

                        </Image></span>
                        <div className="text">Please Register</div>
                        <Form onSubmit={handleRegister}>
                            {/* <!--Email & password input place--> */}
                            <div className="field mb-3">
                                <span className='ps-3'><FaRegUser></FaRegUser></span>
                                <input type="text" name='name' placeholder='Name' required />

                            </div>
                            <div className="field mb-3">
                                <span className='ps-3'><FaPhotoVideo></FaPhotoVideo></span>
                                <input type="text" name='photoURL' placeholder='Photo URL' required />

                            </div>
                            <div className="field mb-3">
                                <span className='ps-3'><AiFillMail></AiFillMail></span>
                                <input type="email" name='email' placeholder='Email Id' required />

                            </div>
                            <div className="field mb-3">
                                <span className='ps-3'><FaLock></FaLock></span>
                                <input type="password" name="password" id="" placeholder='Password' />
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