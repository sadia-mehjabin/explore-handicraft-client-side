import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const CourseCard = ({singleData}) => {
    const {name, id, img, duration} = singleData;
    return (
        <div className='m-5'>
            <CardGroup>
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
                </Card.Footer>
              </Card>
            </CardGroup>
       </div>
    );
};

export default CourseCard;