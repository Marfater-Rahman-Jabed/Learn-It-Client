import React, { useEffect, useState } from 'react';
import Category from './Category';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import StickyBox from "react-sticky-box";

const CourseDetails = () => {
    const [categories, setCategories] = useState([]);
    const [lisst, setLisst] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/news`)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    useEffect(() => {
        fetch(`http://localhost:5000/category`)
            .then(res => res.json())
            .then(data => setLisst(data))
    }, [])
    return (
        <div>
            <h1 className='pt-4  text-center text-light bg-secondary pb-3'><i>Course Details of 4th Industrial Revolution </i></h1>
            <Container className='mt-0'>

                <Row>

                    <Col xs={6} md={4} className='pt-2'  >
                        <StickyBox offsetTop={20} offsetBottom={20}>
                            <h2 className='text-danger mb-2'><i>Categories List</i></h2>
                            {
                                lisst.map(li => <p>
                                    <Link to={li.category_id}>{li.name}</Link>
                                </p>)
                            }
                        </StickyBox>
                    </Col>

                    <Col xs={12} md={8} className=''>
                        {
                            categories.map(c => <Category
                                key={c._id}
                                c={c}
                            ></Category>)
                        }
                    </Col>

                </Row>
            </Container>
        </div>

    );
};

export default CourseDetails;