import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const NewsDetails = () => {
    const news = useLoaderData();
    console.log(news)
    return (
        <div className='bg-success pb-5 '>
            <div className='flex justify-center pt-1 '>

                <Card style={{ width: '48rem' }} className="my-16" >
                    <Card.Img variant="top" src={news.image_url} />
                    <Card.Body>
                        <Card.Title ><span className='fs-1 text-danger'>{news.title}</span></Card.Title>
                        <Card.Text>
                            {news.details.slice(0, 600) + ' ...'}
                        </Card.Text>
                        <div className='d-flex justify-content-between'>
                            <Link to='/news'><Button variant="primary">Go to Category</Button></Link>
                            <Link to={`/news/premium/${news.category_id}`}><Button variant="primary">Get Premium Access</Button></Link>
                        </div>

                    </Card.Body>
                </Card>

            </div>
        </div>
    );
};

export default NewsDetails;