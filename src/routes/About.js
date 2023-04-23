import React from 'react';
import Navbar from '../components/Navbar';
import Lower from '../components/Lower';
import ProjectImg from '../components/ProjectImg';
import AboutContent from '../components/AboutContent';
const About = () => {
    return (
        <div>
            <Navbar/>
            <ProjectImg heading="ABOUT." text="I'm a friendly Front-End Developer." />
            <AboutContent/>
            <Lower/>
        </div>
    )
}

export default About;