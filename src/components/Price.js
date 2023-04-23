import "./PriceStyle.css"

import React from 'react';
import {Link} from "react-router-dom";

const Price = () => {
  return (
    <div className="pricing">
        <dir className="card-contain">
            <dir className="card">
                <h3> -Silver- </h3>
                <span className="bar"></span>
                <p className="btc">$ 10 </p>
                <p>- Duration: 4days -</p>
                <p>- Type: Mini project -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">CONTACT NOW</Link>
            </dir>
            <dir className="card">
                <h3> -Gold- </h3>
                <span className="bar"></span>
                <p className="btc">$ 40 </p>
                <p>- Duration: 6days -</p>
                <p>- Type: Medium project -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">CONTACT NOW</Link>
            </dir>
            <dir className="card">
                <h3> -Gold Premium- </h3>
                <span className="bar"></span>
                <p className="btc">$ 100 </p>
                <p>- Duration: 10-15 days -</p>
                <p>- Type: Large project -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">CONTACT NOW</Link>
            </dir>
        </dir>
    </div>
  )
}

export default Price