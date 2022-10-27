import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { Link,  useLoaderData } from 'react-router-dom';


const CourseDetails = () => {
    
    const course = useLoaderData();
    const {name, img, duration, description, category_id } = course;
    
    
    return (
        <div>
          <header className='m-2 bg-warning p-3 d-flex justify-content-around'>
          <h1>this is {name} course detail</h1>
          <button className='m-2 rounded bg-success p-2'>download pdf</button>
          </header>
            <Card className=''>
                <Card.Img variant="top" className='w-50' src={img} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>
                    {description}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">{duration}</small>
                  <Link to={`/courses/${category_id}`}><button className='bg-success mx-3 p-2 rounded'>Get premium access</button></Link>
                </Card.Footer>
              </Card>
            
            
        </div>
    );
};

export default CourseDetails;