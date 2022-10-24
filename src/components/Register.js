import React from 'react';
import { Form } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h1>Please register</h1>
            <div className='d-flex justify-content-center border-primary'>
           <Form className='w-25 bg-light  rounded p-3'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Your full name</Form.Label>
                <Form.Control type="name" placeholder="Enter your full name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>photo url</Form.Label>
                <Form.Control type="photo" placeholder="Enter your photo URL" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="enter your password" />
            </Form.Group>
            <p>don't have an account? <Link to={'/register'}>please register</Link></p>
            <button className='btn btn-primary w-100 p-2 m-2 rounded'>Log in</button>
            <button className='btn w-100 p-2 m-2 border-secondary rounded'>Log in with google</button>
            <button className='btn w-100 p-2 m-2 border-secondary rounded'>Log in with github</button>
            </Form>
            
           </div>
        </div>
    );
};

export default Register;