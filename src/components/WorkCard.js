import "./WorkCardStyles.css";
import React from 'react'
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
        <img src= {props.imgsrc} alt="image not found" width="320px"/>
        <h2 className="project-title">{props.title}</h2>
        <div className="pro-details">
            <p>{props.text}</p>
            <div className="pro-btn">
                <NavLink to={props.source} className="btn">
                    Source Code
                    </NavLink>
                </div>
            </div>
    </div>
  );
};

export default WorkCard