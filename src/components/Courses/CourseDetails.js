import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = ({id}) => {
    
    
    const loader = useLoaderData();
    
    return (
        <div>
            <h1>data{loader.length}
            </h1>
        </div>
    );
};

export default CourseDetails;