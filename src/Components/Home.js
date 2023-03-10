import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import background from '../Assets/Images/HomepageBanner.jpg';
import '../style/Home.css';
import Category from './Category';

const Home = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/news`)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (

        <div>
            <div style={{ backgroundImage: `url(${background}) `, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', height: '80vh' }}>


                <div className='pt-5'>
                    <h1 className='text-warning pt-5 ps-5 fs-1 font-bold'>Welcome To Learn IT World</h1>
                    <p className='text-light pt-2 ps-5 fs-6 font-semibold'>If you want to digitalized yourself with the modern technology, <br />
                        you should basic knowledge of Information & Communication <br />Technology.

                        If you  have little interest about IT and want to <br /> digitalise your self, It's website only for you...
                    </p></div> <br />
                <p className='text-light  ps-5 font-semibold'>Have Any Interest??</p>
                <span className='pt-5 ps-5 '>
                    <button className='btn btn-info mb-5'><Link to='/news' className='no-decoretion text-color'>Click Here To See Cousres</Link></button>

                </span>


            </div>
            <div className='shadow-2xl  py-6 '>
                <p className='text-center text-orange-700 font-bold text-3xl'>Our Courses</p>
                <p className='text-center font-semibold text-xl mb-3 '>This is our courses which is help you to know details <br />
                    about the Industrial Revolution...</p>
            </div>
            <div className='grid gap-3  px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    categories.map(c => <Category
                        key={c._id}
                        c={c}
                    ></Category>)
                }
            </div>
        </div>

    );
};

export default Home;