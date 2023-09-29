import React from "react";

//import Routes and Route from react-router-dom
import { Routes, Route} from "react-router-dom";

//import components from components folder
import Home from './Home';
import Blue from './Blue';
import Red from './Red';
import Pink from "./Pink";
import Purple from "./Purple";
import Green from "./Green";

export default function MainSection(){
    return(
        <div id="main-section">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blue" element={<Blue />}/>
              <Route path="/red" element={< Red/>} />
              <Route path="/purple" element={<Purple />} />
              <Route path="/green" element={<Green />} />
              <Route path="/pink" element={<Pink />} />
            </Routes>
        </div>
    )
}
