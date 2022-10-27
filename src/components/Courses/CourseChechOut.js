import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const CourseChechOut = () => {
    const courseData = useLoaderData();
    // const {name, img, duration} = courseData;
    // console.log(courseData)
  //   const [premiumAccess, setpremiumAccess] = useState([])

  //   useEffect(() =>{
  //     fetch('https://explore-handicraft-server-sight.vercel.app/courses')
  //     .then(res => res.json())
  //     .then(data => setpremiumAccess(data))
      
  // })
  // console.log(premiumAccess)
    return (
        <div>
           <h1>checkout</h1> 
           {/* <Card className=''>
                <Card.Img variant="top" className='w-50' src={img} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>
                    
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">{duration}</small>
                  
                </Card.Footer>
              </Card> */}
              {/* {
                premiumAccess.map(p => 
                    <h1>{p.name}</h1>
                )
            } */}
        </div>
    );
};

export default CourseChechOut;