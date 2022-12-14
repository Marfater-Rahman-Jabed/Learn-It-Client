import React, { useContext, useState } from 'react';
import '../style/LogIn.css';
import logo from '../Assets/Images/Logo.png'
import { FaGithub, FaGoogle, FaLock, FaPhotoVideo, FaRegUser } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import Image from 'react-bootstrap/Image'
import registrationImage from '../Assets/Images/register3.png';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/ContextApi';
import { toast } from 'react-hot-toast';


const Register = () => {
    const { Registered, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [user, setUser] = useState();
    const [checked, setChecked] = useState(false);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photoURL.value;
        const password = form.password.value;
        console.log(name, password, email, photo)

        Registered(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                form.reset();
                navigate('/login');
                console.log(user);
                handleProfile(name, photo);
                toast.success('Successfully register');
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message)
            })



    }

    const handleProfile = (name, photo) => {
        const profile = {
            displayName: name,
            photoURL: photo,

        }
        updateUserProfile(profile)
            .then(() => {

            })
            .catch(() => {

            })
    }

    const handleCheck = (event) => {
        setChecked(event.target.checked);

    }


    return (
        <div className='bgcolor'>
            {/* <h1>This is registration page</h1> */}
            <div className='jabed'>

                <div>
                    <Image className='img2'
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
                        <div className="text mb-1">Please Register</div>
                        <Form onSubmit={handleRegister}>
                            {/* <!--Email & password input place--> */}
                            <div className="field">
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
                            <div className="field mb-2">
                                <span className='ps-3'><FaLock></FaLock></span>
                                <input type="password" name="password" id="" placeholder='Password' />
                            </div>
                            <Form.Group className="mb-2 ms-2" controlId="formBasicCheckbox">
                                <Form.Check onClick={handleCheck} type="checkbox" label={<>(Must) Accept <Link to='/terms' className='noDecoration'> terms & conditions</Link> </>} />
                            </Form.Group>
                            <span className='ms-2 mt-2'>Already have an account? <Link to='/login' className='noDecoration'>LogIn</Link></span>

                            <button className='button mt-1' disabled={!checked}>Register</button>

                            {/* <!--login & outer button--> */}
                        </Form>

                        <div className="icon-button">

                            <span className='me-2'><FaGithub></FaGithub> GitHub</span>

                            <span className='ms-2'><FaGoogle></FaGoogle> Google</span>


                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;