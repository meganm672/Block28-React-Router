import React from "react";

//import Routes and Route from react-router-dom
import { Routes, Route} from "react-router-dom";

//import components from components folder
import Home from './Home';
import Blue from './Blue';
import Red from './Red';

export default function MainSection(){
    return(
        <div id="main-section">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blue" element={<Blue />}/>
              <Route path="/red" element={< Red/>} />
            </Routes>
        </div>
    )
}
