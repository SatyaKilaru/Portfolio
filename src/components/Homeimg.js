import "./HomeimgStyles.css";
import React from 'react'
import BgImg from "../assets/intro-bg.jpg"

import { Link } from "react-router-dom";

const Homeimg = () => {
  return (
    <div className="SS">
        <div className="ss">
            <img className="into-img" src={BgImg} alt="BgImg" />
        </div>
        <div className="content">
            <p>HI, I'M A FREELANCER.</p>
            <h1>React Developer.</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  );
};

export default Homeimg;