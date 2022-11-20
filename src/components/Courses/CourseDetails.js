import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { Link,  useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";


const ref = React.createRef();

const CourseDetails = () => {
    
    const course = useLoaderData();
    const {name, img, duration, description, id } = course;
    
    
    return (
        <div className='w-75 mx-auto'>
          <header className='m-2 p-3 d-flex justify-content-around' style={{ background: 'linear-gradient(to right, rgba(102, 126, 234, 0.5), rgb(203, 38, 192))' }}>
          <h1>This is {name} course detail</h1>
          
          <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf} className='m-2 rounded bg-primary p-2' >download pdf</button>}
      </Pdf>
          </header>
            <div ref={ref}>
            <Card className=''>
                <Card.Img variant="top" className='' src={img} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>
                    {description}
                  </Card.Text>
                </Card.Body>
                <Card.Footer style={{ background: 'linear-gradient(to right, rgba(102, 126, 234, 0.5), rgba(118, 75, 162, 0.5))' }}>
                  <small>Time: {duration}</small>
                  <Link to={`/courses/checkout/${id}`}><button className='bg-primary mx-3 p-2 rounded' >Get premium access</button></Link>
                </Card.Footer>
              </Card>
            </div>
            
            
        </div>
    );
};

export default CourseDetails;