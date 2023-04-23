import "./NavbarStyle.css"

import React, { useState } from 'react'
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";

const Navbar = () => {
    const [click,sclick] = useState(false);
    const handleClick = () => sclick(!click);

    const [color, sColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 100){
            sColor(true);
        } else{
            sColor(false);
        }
    };
    window.addEventListener("scroll", changeColor);
    return (
    <div className = {color ? "header header-bg" : "header"}>
        <Link to="/">
            <h1>Portfolio</h1>
        </Link> 
        <ul className={click ? "menu active" : "menu"}>
            <li>
                <Link to ="/">Home</Link>
            </li>
            <li>
                <Link to ="/project">Project</Link>
            </li>
            <li>
                <Link to ="/about">About</Link>
            </li>
            <li>
                <Link to ="/contact ">Contact</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: "#fff"}}/> ):( <FaBars size={20} style={{color: "#fff"}}/>)}

        </div>
    </div>
  );
};

export default Navbar;