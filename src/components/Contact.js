// import React, { useState } from 'react';
import './Contact.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';

function Contact() {
    return (
        <Form>
            <div id="contactForm">
                <Card.Title className="contactMe">
                    <h1>Contact Me</h1>
                </Card.Title>
                <div id="form">
                    <Form.Group className="mb-3" controlId="formName" id="formContent">
                        <Form.Label id="label">Full Name:</Form.Label>
                        <Form.Control id="inputBox" type="name" placeholder="Enter full name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail" id="formContent">
                        <Form.Label id="label">Email address:</Form.Label>
                        <Form.Control id="inputBox" type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            I'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <InputGroup id="messageBox">
                        <Form.Label id="label">Message:</Form.Label>
                        <Form.Control id="message" as="textarea" aria-label="With textarea" />
                    </InputGroup>
                </div>
                <div id="btn">
                    <Button id="submitBtn" variant="primary" type="submit">
                        Submit
                    </Button>
                </div>
            </div>
        </Form >
    );
}

export default Contact;
