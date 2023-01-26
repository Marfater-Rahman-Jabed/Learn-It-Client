import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    return (
        <div className='w-50 mx-auto my-16'>
            <h1 className='mt-2 mb-4'>Here is the FAQ. Which the people want to know</h1>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>(1) Who should take this Course?</Accordion.Header>
                    <Accordion.Body>
                        Everybody should take this course because everybody should have know the basic knowledge about Information and communication technology.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>(2) Are there prerequisites or language requirements?</Accordion.Header>
                    <Accordion.Body>
                        Yes. Though our blog is written by English language so you have to basic knowledge about English language.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>(3) I am a high school student, can I join?</Accordion.Header>
                    <Accordion.Body>
                        Yes. <br /> Of Course. Science ,Information technology is open for everyone .
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>(4) Can I take more than one course at a time?</Accordion.Header>
                    <Accordion.Body>
                        Yes. <br /> You can take more than one Course at a time
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Faq;