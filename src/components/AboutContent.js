import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import Re from "../assets/react1.jpg";
import Re1 from "../assets/react2.webp";

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1> Who Am I?</h1>
            <p>I'm a Front-End developer. I create responsive as well as secure websites for my clients.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stact top">
                    <img src={Re}
                    className="img" alt="true"/>
                </div>
            </div>
            <div className="img-container">
                <div className="img-stact bottom">
                    <img src={Re1}
                    className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent