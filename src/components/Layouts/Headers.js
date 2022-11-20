import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import { FaUserAlt, } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import icon from '../../icons8-hand-holding-needle-50.png'
import ReactTooltip from 'react-tooltip';


const Headers = () => {
    const {user, logOut} = useContext(AuthContext);
    console.log(user)
    const handleLogOut = () => {
        logOut()
        .then(() => {
        })
        .catch(err => console.log(err))
      }
    const bg = () => {
        document.body.style.backgroundColor = "black";  
    }

    return (
        <Navbar style={{ background: 'linear-gradient(to right, rgb(250, 85, 99), rgba(74, 232, 151))' }} expand="lg">
            <Container>
                <img className='mx-3' src={icon} alt="" />
            <Navbar.Brand className='text-white'>Explore Handicraft World</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Link to={'/'}><button className='mx-2 rounded'>Home</button></Link>
                <Link to={'/blog'}><button className='mx-2 rounded'>FAQ/Blog</button></Link>
                <Link to={'/Courses'}><button className='mx-2 rounded'>Courses</button></Link>
                <Link><button onClick={bg} className='mx-2 rounded'>Dark theme</button></Link>
                
                {
                    user ? <button className='mx-2 rounded' onClick={handleLogOut}>Log out</button> 
                    : <Link to={'/login'}><button className='mx-2 rounded'>Login</button></Link>
                }

                {
                    user?.photoURL?
                    <>
                    <Image data-tip='test' style={{height: "40px"}} roundedCircle src={user?.photoURL}></Image>
                    
                    </>
                    : <FaUserAlt data-tip='test' className='m-2'></FaUserAlt>
                } 
                 {
                    user &&
                    <h6 className='m-2'>{user?.displayName}</h6>
                    
                } 
                <ReactTooltip />
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
          ); 
};

export default Headers;