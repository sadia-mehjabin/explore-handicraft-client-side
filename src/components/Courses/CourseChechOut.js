import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const CourseChechOut = () => {
    const courseData = useLoaderData();
    const {name, img, duration, description} = courseData;
   
    return (
        <div className='w-50 mx-auto'>
           <h1 className='m-3 text-center'>Checkout Page of {name}</h1> 
           <Card className=''>
                <Card.Img variant="top" className='' src={img} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <h6 className='text-success'>price: $ 2000</h6>
                  <h6 className='text-danger'>Start: from 23/4/2022 to 29/4/2022</h6>
                  <h6><i>If you are interested then enroll now. and confirm sit for you. we have limited sit.</i></h6>
                  <Card.Text>
                    <p><span className='text-danger'>description:</span> {description}</p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">{duration}</small>
                  <small className="text-muted mx-5">4 Days remaining</small>
                  
                </Card.Footer>
              </Card>
              
          
        </div>
    );
};

export default CourseChechOut;