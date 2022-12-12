import React from 'react';
import '../style/LogIn.css';
import logo from '../Assets/Images/Logo.png'
import { FaLock, FaRegUser } from "react-icons/fa";
import Image from 'react-bootstrap/Image'
import logInLogo from '../Assets/Images/loginPageImage.webp';
import { AiFillMail } from "react-icons/ai";
import { Link } from 'react-router-dom';

const LogIn = () => {
    return (

        <div className='jabed'>

            <div>
                <Image className='img'
                    src={logInLogo}
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
                    <div class="text">Please LogIn</div>
                    <form action="#">
                        {/* <!--Email & password input place--> */}
                        <div class="field">
                            <span className='ps-3'><AiFillMail></AiFillMail></span>
                            <input type="email" placeholder='Email Id' required />

                        </div>
                        <div class="field">
                            <span className='ps-3'><FaLock></FaLock></span>
                            <input type="password" name="" id="" placeholder='Password' />
                        </div>
                        <span >New In This website? <Link to='/register' className='noDecoration'>Register</Link> </span>
                        <button className='button'>Log in</button>

                        {/* <!--login & outer button--> */}
                    </form>
                </div>
            </div>
        </div>

    );
};

export default LogIn;