import React from 'react'
import { StrictMode } from 'react'
import Navbar from './components/Navbar/Navbar.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingPage from './pages/Home/LandingPage.jsx';
import MajorHighlights from './pages/Overview/MajorHighlights.jsx';
import Empowering from './pages/Empowerment/Empowering.jsx';
import Journey from './pages/Journey/Journey.jsx';
import Affordability from './pages/Empowerment/Affordability.jsx';
import 'typeface-bebas-neue';
import './App.css';
function App() {
  return (
    <>
    <BrowserRouter>
       <Navbar/>
       <div className="main">
       {/* <LandingPage/> */}
       <MajorHighlights/>
       {/* <Empowering/> */}
       {/* <Affordability/> */}
       {/* <Journey/> */}
       </div>
     
    </BrowserRouter>
    </>
  )
}

export default App;
