import { FaPhone,FaHome, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"
import "./LowerStyles.css"
import React from 'react'

const Lower = () => {
  return (
    <div className="footer">
        <div className="footer-contain">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                    <div>
                        <p>8-51, Old Current Office, Nandigama.</p>
                        <p>India.</p>
                    </div>
                </div>
                <div>
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}} /> +91 6309849469</h4>
                </div>
                <div>
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}} />satyasaikilaru.1419n@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About Me</h4>
                <p>Hello, This is Satyasai Kilaru, a cybersecurity student and front-end developer. I'm passionate about creating secure and user-friendly web experiences that bring value to businesses and users alike. My background in cybersecurity gives me a unique perspective when it comes to designing and building websites, as I understand the importance of implementing strong security measures to protect against cyber threats.</p>
                <div className="social">
                    <FaFacebook size={30} style={{color:"#fff", marginRight: "2rem"}}/>
                    <FaTwitter size={30} style={{color:"#fff", marginRight: "2rem"}}/>
                    <FaLinkedin size={30} style={{color:"#fff", marginRight: "2rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Lower