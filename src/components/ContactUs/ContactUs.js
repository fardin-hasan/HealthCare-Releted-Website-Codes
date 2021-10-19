import React from 'react';
import { Form } from 'react-bootstrap';

const ContactUs = () => {
    return (
        <div id='contact' className='m-5'>
            <h1 className='text-center text-light m-5'>Contact Us Here</h1>
            <Form className='w-50 m-auto'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className='text-light'>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter Your Email Here" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-light'>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className='text-light'>Your Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <div className='text-center'>
                    <button type="submit" className="btn btn-warning px-5  ">Submit</button>
                </div>


            </Form>
        </div>
    );
};

export default ContactUs;