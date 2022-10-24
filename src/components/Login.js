import React from 'react';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='' >
            <h1 className='text-center m-5'>Please log In</h1>
           <div className='d-flex justify-content-center border-primary'>
           <Form className='w-25 bg-light  rounded p-2'>
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

export default Login;