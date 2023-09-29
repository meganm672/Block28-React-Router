import { useState } from 'react'

import './App.css'

//import Routes, Route, and Link componets 
import { Routes, Route, Link } from "react-router-dom";

//import home, blue, and red components
import Home from './components/Home';
import Blue from './components/Blue';
import Red from './components/Red';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="container">
          <div id="navbar">
            <Link to="/">Home</Link>
            <Link to="/blue">Blue</Link> 
            <Link to="/red">Red</Link>
          </div>
          <div id="main-section">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blue" element={<Blue />}/>
              <Route path="/red" element={< Red/>} />
            </Routes>
          </div>
      </div>
    </>
  )
}

export default App
