import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-center m-4 '>Welcome to the  blog page</h2>
            <div className='bg-primary p-5 rounded m-5'>
            <h4>Question: What is cors?</h4>
            <h6>Ans: Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</h6>
            </div>
            <div className='bg-primary p-5 rounded m-5'>
            <h4>Question: Why are you using firebase? what other option do you have to implement authentication?</h4>
            <h6>Ans. Firebase Authentication aims to make building secure authentication systems easy, while improving the sign-in and onboarding experience for end users. It provides an end-to-end identity solution, supporting email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login, and more. <br />
            Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication.
            </h6>
            </div>
            <div className='bg-primary p-5 rounded m-5'>
            <h4>Question: how does the private route works?</h4>
            <h6>Ans: The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</h6>
            </div>
            <div className='bg-primary p-5 rounded m-5'>
            <h4>Question: what is node? how does it works?</h4>
            <h6>Ans:  Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications. <br />
            It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
            </h6>
            </div>
           
        </div>
    );
};

export default Blog;