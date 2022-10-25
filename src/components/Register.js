import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { AuthContext } from './contexts/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    // const googleProvider = new GoogleAuthProvider();
    const handleSubmit = (event)=> {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log( name, photoURL)

        createUser(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user)
        })
        .catch(error=> console.error(error))
        form.reset()
    }

    return (
        <div>
            <h1 className='text-center m-3'>Please register</h1>
            <div className='container mx-auto w-25'>
           <Form className=' bg-light rounded p-3' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                <Form.Label>name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Write your full name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                <Form.Label>photoURL</Form.Label>
                <Form.Control type="url" name="photoURL" placeholder="Enter your photo URL"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter your email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="enter your password" required/>
            </Form.Group>
            <p>Already have an account? <Link to={'/login'}>please log in</Link></p>
            <div>
            <button className='btn btn-primary w-100 p-2 m-2 rounded'>Register</button>
            </div>
            </Form>
           </div>
        </div>
    );
};

export default Register;