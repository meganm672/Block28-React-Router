import React from "react";

//import  Link from react-router-dom
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div id="navbar">
            <Link to="/" className="link">Home</Link>
            <Link to="/blue" className="link">Blue</Link> 
            <Link to="/red" className="link">Red</Link>
            <Link to="/green" className="link">Green</Link>
            <Link to="/purple" className="link">Purple</Link>
            <Link to="/pink" className="link">Pink</Link>
        </div>
    )
}

export default Navbar;