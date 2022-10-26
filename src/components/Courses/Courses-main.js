import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard';

const CoursesMain = () => {
    const data = useLoaderData();
    return (
        <div>
            <h2>courses main page{data.length}</h2>
            {data.map(singleData =>
             <CourseCard
            key={singleData.id}
            singleData={singleData}
            ></CourseCard>)}
            <Outlet></Outlet>
        </div>
    );
};

export default CoursesMain;