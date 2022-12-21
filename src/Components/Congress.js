import React from 'react'
// import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Congress = () => {
    // const { width, height } = useWindowSize()
    return (
        <div >
            <div >
                < Confetti
                    style={{ height: "100vh", width: "200vh" }}

                />
                <div className='d-flex justify-content-center align-items-center pt-5'>
                    <Card style={{ width: '28rem', height: '14rem', border: '15px solid purple', borderRadius: '10px' }} className='bg-danger'>

                        <Card.Body>
                            <Card.Title className='text-light'>Well Done !!!</Card.Title>
                            <Card.Text className='text-warning'>
                                <br />
                                Congratulations!!!.
                                You compleated your reading blog successfully..
                            </Card.Text>
                            <Link to='/news'><Button variant="primary">Back to Categories</Button></Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>


    );
};

export default Congress;