import React from 'react';
import Navbar from '../components/Navbar';
import Lower from '../components/Lower';
import ProjectImg from '../components/ProjectImg';
import Form from "../components/Form";
const Contact = () => {
    return (
        <div>
            <Navbar/>
            <ProjectImg heading="CONTACT." text="Lets have a Conversation."/>
            <Form/>
            <Lower/>
        </div>
    )
}

export default Contact;