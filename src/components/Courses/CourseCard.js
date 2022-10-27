import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';

const CourseCard = ({singleData}) => {
    const {name, id, img, duration, description} = singleData;
    return (
        <div className='m-5'>
            <CardGroup>
              <Card className=''>
                <Card.Img variant="top" className='w-50' src={img} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>
                    <p>{description.slice(0, 200)} ...</p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">{duration}</small>
                  <Link to={`/courses/${id}`}><button className='bg-success mx-3 p-2 rounded'>get details</button></Link>
                </Card.Footer>
              </Card>
            </CardGroup>
       </div>
    );
};

export default CourseCard;