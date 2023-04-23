import React from 'react';
import Navbar from '../components/Navbar';
import Lower from '../components/Lower';
import ProjectImg from '../components/ProjectImg';
import Price from '../components/Price';
import Work from '../components/Work';

const Project = () => {
    return (
        <div>
            <Navbar/>
            <ProjectImg  heading="PROJECTS." text="Some of my most recent Projects"/>
            <Work/>
            <Price/>
            <Lower/>
        </div>
    );
};

export default Project;