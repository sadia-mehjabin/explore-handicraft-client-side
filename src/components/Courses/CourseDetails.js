import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData()
    return (
        <div>
            <h1>data{course.length}</h1>
            <button>Get premium access</button>
        </div>
    );
};

export default CourseDetails;