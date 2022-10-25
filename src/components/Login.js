import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from './contexts/AuthProvider';
import { GoogleAuthProvider } from "firebase/auth";


const Login = () => {

    const {providerLogin} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = ()=>{
        providerLogin(googleProvider)
        .then(result=>{
            const user = result.user;
            console.log(user)
        })
        .catch(error=> console.error(error))
    }

    return (
        <div>
            <h1 className='text-center m-5'>Please log In</h1>
           <div className='container mx-auto w-25 '>
           <Form className=' bg-light rounded p-3'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="enter your password" />
            </Form.Group>
            <p>don't have an account? <Link to={'/register'}>please register</Link></p>
            </Form>
            <div>
            <button className='btn btn-primary w-100 p-2 m-2 rounded'>Log in</button>
            <button onClick={handleGoogleSignIn} className='btn w-100 p-2 m-2 border-primary rounded'>Log in with google</button>
            <button className='btn w-100 p-2 m-2 border-secondary rounded'>Log in with github</button>
            </div>
           </div>
        </div>
    );
};

export default Login;