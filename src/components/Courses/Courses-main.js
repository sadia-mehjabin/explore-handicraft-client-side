import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard';

const CoursesMain = () => {
    const [categories, setCategories] = useState([])
    const data2 = useLoaderData();

    useEffect(() =>{
        fetch('https://explore-handicraft-server-sight.vercel.app/courses')
        .then(res => res.json())
        .then(data => setCategories(data))
        
    })

    return (
        <div className='d-flex'>
            <div className='w-100 m-3'>
            {
                categories.map(category => 
                    <p key={category.id}><Link to={`/courses/${category.id}`}>{category.name}</Link></p>
                )
            }
            </div>
           <Row xs={1} md={2} lg={3} sm={1} className="g-4" >
           {/* <div className='g-col-4'> */}
            {
                data2.map(singleData =>
                <CourseCard
                key={singleData.id}
                singleData={singleData}
                ></CourseCard>)
            }
            {/* </div> */}
           </Row>
        </div>
    );
};

export default CoursesMain;