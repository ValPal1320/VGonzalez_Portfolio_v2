import React, { useState } from 'react';
import './Contact.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [submitMsg, setSubmitMsg] = useState('');

    const regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/

    const validateEmail = (e) => {
        setEmail(e.target.value);

        if (regex.test(email) === false) {
            setErrorMessage('Please enter a valid email address.')
        } else {
            setErrorMessage('');
            return true;
        }
    }

    const submit = () => {
        if (name) {
            console.log("Name: " + name);
        } if (email) {
            console.log("Email: " + email);
        } if (message) {
            console.log("Message: " + message);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.length === 0 || message.length === 0) {
            setErrorMessage(true);
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <div id="contactForm">
                <Card.Title className="contactMe">
                    <h1>Contact Me</h1>
                </Card.Title>
                <div id="form">
                    <Form.Group className="mb-3" controlId="formName" id="formContent">
                        <Form.Label id="label">Full Name:</Form.Label>
                        <Form.Control id="inputBox" type="name" placeholder="Enter full name" onChange={e => setName(e.target.value)} />
                        {errorMessage && name.length <= 0 ?
                            <Form.Label id="alert">Name can't be empty.</Form.Label> : ""}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail" id="formContent">
                        <Form.Label id="label">Email address:</Form.Label>
                        <Form.Control id="inputBox" type="email" placeholder="Enter email" onChange={validateEmail} />
                        <Form.Text className="text-muted">
                            I'll never share your email with anyone else.
                        </Form.Text>
                        {errorMessage && email.length <= 0 ?
                            <Form.Label id="alert"> Email can't be empty.</Form.Label> : ""}
                    </Form.Group>

                    <InputGroup id="messageBox">
                        <Form.Label id="label">Message:</Form.Label>
                        <Form.Control id="message" as="textarea" aria-label="With textarea" onChange={e => setMessage(e.target.value)} />
                        {errorMessage && message.length <= 0 ?
                            <Form.Label id="alert">Message can't be empty.</Form.Label> : ""}
                    </InputGroup>
                </div>
                <div id="btn">
                    <Button id="submitBtn" variant="primary" type="submit" onClick={submit}>
                        Submit
                    </Button>
                </div>
            </div>
        </Form >
    );
}


export default Contact;
