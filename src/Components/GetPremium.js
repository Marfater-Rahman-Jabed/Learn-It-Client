import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




const GetPremium = () => {
    const news = useLoaderData();
    return (
        <div className='bg-success pb-5'>
            <div className='flex justify-center pt-1 '>

                <Card className="my-16 w-2/3">
                    <Card.Img variant="top" src={news.image_url} />
                    <Card.Body style={{ border: '5px solid tomato', borderTop: '0px' }}>
                        <Card.Title ><span className='fs-1 text-danger'>{news.title}</span></Card.Title>
                        <Card.Text>
                            {news.details}
                        </Card.Text>
                        <div className='flex lg:justify-between lg:flex-row flex-col gap-2'>
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