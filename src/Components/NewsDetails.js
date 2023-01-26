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

                <Card className="my-16 w-2/3" >
                    <Card.Img variant="top" src={news.image_url} />
                    <Card.Body>
                        <Card.Title ><span className='fs-1 text-danger'>{news.title}</span></Card.Title>
                        <Card.Text>
                            {news.details.slice(0, 600) + ' ...'}
                        </Card.Text>
                        <div className='flex lg:justify-between lg:flex-row flex-col gap-2'>
                            <Link to='/news'><Button variant="primary">Go to Category</Button></Link>
                            <Link to={`/news/premium/${news.category_id}`}><Button variant="primary">Premium Access</Button></Link>
                        </div>

                    </Card.Body>
                </Card>

            </div>
        </div>
    );
};

export default NewsDetails;