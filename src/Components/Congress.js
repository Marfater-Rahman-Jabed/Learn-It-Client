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
            < Confetti
                style={{ height: "100vh", width: "200vh" }}

            />
            <div className='d-flex justify-content-center align-items-center pt-5'>
                <Card style={{ width: '28rem', height: '12rem' }}>

                    <Card.Body>
                        <Card.Title className='text-success'>Well Done !!!</Card.Title>
                        <Card.Text className='text-info'>
                            <br />
                            Congratulations!!!.
                            You compleated your reading blog successfully..
                        </Card.Text>
                        <Link to='/news'><Button variant="primary">Back to Categories</Button></Link>
                    </Card.Body>
                </Card>
            </div>
        </div>


    );
};

export default Congress;