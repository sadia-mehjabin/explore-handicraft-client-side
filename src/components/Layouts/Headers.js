import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Headers = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-primary">
            <div class="container-fluid">
                <h3>Explore Handicraft World</h3>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <Link to={'/'}><button className='mx-2'>Home</button></Link>
                    </li>
                    <li class="nav-item">
                    <Link to={'/blog'}><button>Blog</button></Link>
                    </li>
                    <li class="nav-item">
                    <Link to={'/Courses'}><button>Courses</button></Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
            {/* <Link to={'/'}>Home</Link>
            <Link to={'/blog'}>Blog</Link>
            <Link to={'/Courses'}>Courses</Link> */}
            
        </div>
    );
};

export default Headers;