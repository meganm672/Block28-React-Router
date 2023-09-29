import React from "react";

//import  Link from react-router-dom
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div id="navbar">
            <Link to="/">Home</Link>
            <Link to="/blue">Blue</Link> 
            <Link to="/red">Red</Link>
            <Link to="/green">Green</Link>
            <Link to="/purple">Purple</Link>
            <Link to="/pink">Pink</Link>
        </div>
    )
}

export default Navbar;