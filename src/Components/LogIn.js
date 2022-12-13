import React, { useContext } from 'react';
import '../style/LogIn.css';
import logo from '../Assets/Images/Logo.png'
import { FaLock, FaRegUser } from "react-icons/fa";
import Image from 'react-bootstrap/Image'
import logInLogo from '../Assets/Images/loginPageImage.webp';
import { AiFillMail } from "react-icons/ai";
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/ContextApi';
import { toast } from 'react-hot-toast';




const LogIn = () => {
    const { Login } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        Login(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate('/');
                toast.success('successully logged in')

            })
            .catch((error) => {
                console.log(error);
                toast.error(error.message)
            })


    }


    return (

        <div className='jabed'>

            <div>
                <Image className='img'
                    src={logInLogo}
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
                    <div className="text">Please LogIn  </div>
                    <Form onSubmit={handleLogin} >
                        {/* <!--Email & password input place--> */}
                        <div className="field">
                            <span className='ps-3'><AiFillMail></AiFillMail></span>
                            <input type="email" name='email' placeholder='Email Id' required />

                        </div>
                        <div className="field">
                            <span className='ps-3'><FaLock></FaLock></span>
                            <input type="password" name="password" id="" placeholder='Password' />
                        </div>
                        <span >New In This website? <Link to='/register' className='noDecoration'>Register</Link> </span>
                        <button className='button'>Log in</button>

                        {/* <!--login & outer button--> */}
                    </Form>
                </div>
            </div>
        </div>

    );
};

export default LogIn;