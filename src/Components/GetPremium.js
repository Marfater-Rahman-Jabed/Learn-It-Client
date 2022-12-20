import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




const GetPremium = () => {
    const news = useLoaderData();
    return (
        <div className='bg-success mb-5'>
            <div className='d-flex justify-content-center pt-3 '>

                <Card style={{ height: '14rem', width: '48rem' }} variant="top" >
                    <Card.Img variant="top" src={news.image_url} />
                    <Card.Body>
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