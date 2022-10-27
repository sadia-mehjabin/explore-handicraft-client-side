import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { Link, Navigate, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import Login from '../Login';
import CourseChechOut from './CourseChechOut';

const CourseDetails = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    console.log(user)
    const course = useLoaderData();
    const {name, img, duration, } = course;
    
    
    return (
        <div>
            <Card className=''>
                <Card.Img variant="top" className='w-50' src={img} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">{duration}</small>
                  <Link to="/courses/premium"><button className='bg-success mx-3 p-2 rounded'>Get premium access</button></Link>
                </Card.Footer>
              </Card>
            
            
        </div>
    );
};

export default CourseDetails;