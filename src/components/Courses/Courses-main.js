import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import CourseCard from './CourseCard';

const CoursesMain = () => {
    const {id} = useContext(AuthContext);
    const data = useLoaderData();
    
    
    return (
        <div className='d-flex'>
            <div className='w-50 p-3'>
            <Link to={`/courses/${id}`} className='m-2 rounded'>Paper craft</Link> <br></br>
            <Link className='m-2 rounded'>Glass painting</Link> <br></br>
            <Link className='m-2 rounded'>pottery</Link> <br></br>
            <Link className='m-2 rounded'>swing</Link> <br></br>
            <Link className='m-2 rounded'>Decorate with nature</Link> <br></br>
            <Link className='m-2 rounded'>Tat shilpo</Link>
            </div>
            <div>
            {data.map(singleData =>
             <CourseCard
            key={singleData.id}
            singleData={singleData}
            ></CourseCard>)}
            </div>
        </div>
    );
};

export default CoursesMain;