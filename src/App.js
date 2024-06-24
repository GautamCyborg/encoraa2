import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Technology from "./pages/Technology";
import Upload from "./pages/Upload";
import Search from "./pages/Search";
import Register from "./pages/Register";
import Map from "./pages/Map";
import Statistics from "./pages/Statistics";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

import { AddressProvider } from "./contexts/AddressContext";

function App() {
  return (
    <AddressProvider> 
      <Router>
        <Navbar/>
        <div>
          <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/TreeRegistry" element={<Home/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Technology" element={<Technology/>}/>
            <Route path="/Upload" element={<Upload/>}/>
            <Route path="/trees" element={<Search/>}/>
            <Route path="/signup" element={<Register/>}/>
            <Route path="/map" element={<Map/>}/>
            <Route path="/Statistics" element={<Statistics/>}/>
          </Routes>
        </div>
        <Footer/>
      </Router>
    </AddressProvider>
  );
}

export default App;
