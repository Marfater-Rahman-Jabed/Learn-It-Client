import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




const GetPremium = () => {
    const news = useLoaderData();
    return (
        <div className='bg-success pb-5'>
            <div className='d-flex justify-content-center pt-1 '>

                <Card style={{ width: '48rem' }} variant="top" className='my-16'>
                    <Card.Img variant="top" src={news.image_url} />
                    <Card.Body style={{ border: '5px solid tomato', borderTop: '0px' }}>
                        <Card.Title ><span className='fs-1 text-danger'>{news.title}</span></Card.Title>
                        <Card.Text>
                            {news.details}
                        </Card.Text>
                        <div className='d-flex justify-content-between'>
                            <Link to='/news'><Button variant="primary">Go to Category</Button></Link>
                            <Link to={`/news/premium`}><Button variant="primary">Complete</Button></Link>
                        </div>

                    </Card.Body>
                </Card>

            </div>
        </div>
    );
};

export default GetPremium;