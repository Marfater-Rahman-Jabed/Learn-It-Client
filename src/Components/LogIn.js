import React from 'react';
import '../style/LogIn.css';
import logo from '../Assets/Images/Logo.png'
import { FaLock, FaRegUser } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import logInLogo from '../Assets/Images/loginPageImage.webp';

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
                    <div className='loginImg'><img src={logo}></img></div>
                    <div class="text">Please LogIn</div>
                    <form action="#">
                        {/* <!--Email & password input place--> */}
                        <div class="field">
                            <span className='ps-3'><FaRegUser></FaRegUser></span>
                            <input type="email" placeholder='Email Id' required />

                        </div>
                        <div class="field">
                            <span className='ps-3'><FaLock></FaLock></span>
                            <input type="password" name="" id="" placeholder='Password' />
                        </div>
                        <button className='button'>Log in</button>

                        {/* <!--login & outer button--> */}
                    </form>
                </div>
            </div>
        </div>

    );
};

export default LogIn;