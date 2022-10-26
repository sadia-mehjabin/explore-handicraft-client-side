import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import { FaUserAlt, } from 'react-icons/fa';

const Headers = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-primary">
            <div class="container-fluid">
                <h5>Explore Handicraft World</h5>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <Link to={'/'}><button className='mx-2 rounded'>Home</button></Link>
                    </li>
                    <li class="nav-item">
                    <Link to={'/blog'}><button className='mx-2 rounded'>FAQ/Blog</button></Link>
                    </li>
                    <li class="nav-item">
                    <Link to={'/Courses'}><button className='mx-2 rounded'>Courses</button></Link>
                    </li>
                    <li class="nav-item">
                    <Link to={'/login'}><button className='mx-2 rounded'>Login</button></Link>
                    </li>
                    <li class="nav-item">
                    <button className='mx-2 rounded'>Dark Theme </button>
                    </li>
                    
                    {/* {
                        user.photoURL?
                        <Image style={{height: "40px"}} roundedCircle src={user.photoURL}></Image>
                        : <FaUserAlt></FaUserAlt>
                    }  
                    <h6 className='m-2'>{user.displayName}</h6> */}
                    
                </ul>
                </div>
            </div>
            </nav>
        </div>
    );
};

export default Headers;