import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Category = ({ c }) => {

    // const image = c

    return (
        <div className='mb-3 mt-1'>
            <Card >
                <Card.Img style={{ height: '14rem' }} variant="top" src={c.image_url} />
                <Card.Body>
                    <Card.Title>{c.title}</Card.Title>
                    <Card.Text>
                        {c.details.length > 250 ?
                            <p>
                                {c.details.slice(0, 250) + '...'} <Link to={`${c._id}`}>see more</Link>
                            </p>
                            :
                            <p>
                                {
                                    c.details
                                }
                            </p>


                        }

                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </div >
    );
};

export default Category;