import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CoursesMain = () => {
    const data = useLoaderData();
    return (
        <div>
            <h2>courses main  page{data.length}</h2>
            {data.map(d => <h1>{d.img}</h1>)}
        </div>
    );
};

export default CoursesMain;