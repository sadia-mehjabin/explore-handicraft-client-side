import React from 'react';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';

const CourseCard = ({singleData}) => {
    const {name, id, img, duration, description} = singleData;
    return (
       
            <Col>
              <Card className=''>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>
                    <p>{description.slice(0, 200)} ...</p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer style={{ background: 'linear-gradient(to right, rgba(102, 126, 234, 0.5), rgba(118, 75, 162, 0.5))' }}>
                  <small className="text-muted">{duration}</small>
                  <Link to={`/courses/${id}`}><button className=' mx-3 p-2 rounded' >get details</button></Link>
                </Card.Footer>
              </Card>
            </Col>
       
    );
};

export default CourseCard;