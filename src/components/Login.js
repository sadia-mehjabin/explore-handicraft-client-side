import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Link, Navigate, useLocation, useNavigate, } from 'react-router-dom';
import { AuthContext } from './contexts/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";


const Login = () => {

    const {user, providerLogin, signIn, githublogin, updateUser} = useContext(AuthContext);
    const [error, setError] = useState();
    const location = useLocation()
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleLoginSubmit = (event)=> {
        event.preventDefault();
        const name = user?.name;
        const photoURL = user?.photoURL;
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        

        signIn(email, password)
        .then(result=>{
            const user = result.user;
            setError('');
            navigate(from, {replace:true});
            const userInfo ={
                displayName: name,
                photoURL
            }
            updateUser(userInfo)
            .then(() => {
                console.log(user)
            })
            .catch(error => console.log(error))
        })
        .catch(error=> setError(error.message))
        form.reset()
    }

    const handleGoogleSignIn = ()=>{
        providerLogin(googleProvider)
        .then(result=>{
            const user = result.user;
            navigate(from, {replace:true});
        })
        .catch(error=> setError(error.message))
    }
    const handleGithubSignIn = ()=>{
        githublogin(githubProvider)
        .then(result=>{
            const user = result.user;
        })
        .catch(error=> console.error(error))
        navigate(from, {replace:true});
    }

    return (
        <div>
            <h1 className='text-center m-3'>Please log In</h1>
            <div className='container mx-auto w-25 '>
            <Form onSubmit={handleLoginSubmit} className=' bg-light rounded p-3'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter your email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="enter your password" required/>
                </Form.Group>
                <p>don't have an account? <Link to='/register'>please register</Link></p> 
                <p className='text-danger'>{error}</p>
                <button className='btn btn-primary w-100 p-2 m-2 rounded'>Log in</button>
                </Form>
                <div>
            
                <button onClick={handleGoogleSignIn} className='btn w-100 p-2 m-2 border-primary rounded'>Log in with google</button>
                <button onClick={handleGithubSignIn} className='btn w-100 p-2 m-2 border-secondary rounded'>Log in with github</button>
                </div>
                
                
            </div>
        </div>
    );
};

export default Login;